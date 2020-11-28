import { NodeAttributes } from "./generated/attributes";
import { RenderFunc, generateUniqueIds } from "./render-function";
import fetch from "node-fetch";
import { pipeline } from "stream";
import { promisify } from "util";
import { createWriteStream, promises } from "fs";
import path from "path";
const streamPipeline = promisify(pipeline);

export type Node = {
  id: string;
  attributes?: NodeAttributes;
  imageDownload?: boolean;
};

const imageCacheDir = path.join(__dirname, "../../image-cache");

const encodeBase64 = (input: string): string =>
  Buffer.from(input).toString("base64");

const openCachePromises: Record<string, Promise<string> | null> = {};

const mapMimeToExtension: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
};

const downloadImage = async (
  url: string,
  imagePathWithoutExtension: string
): Promise<string> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(`Failed to download ${url}: ${response.statusText}`);
  }
  const mime = response.headers.get("content-type");
  if (!Object.keys(mapMimeToExtension).includes(mime || "")) {
    throw Error(`Invalid mime type: ${mime}`);
  }
  const imagePath = `${imagePathWithoutExtension}.${
    mapMimeToExtension[mime as string]
  }`;
  await streamPipeline(response.body, createWriteStream(imagePath));
  return imagePath;
};

export const findOrDownload = async (
  url: string,
  imagePathWithoutExtension: string
): Promise<string> => {
  const cachedFile = (await promises.readdir(imageCacheDir)).find((entry) =>
    entry.startsWith(imagePathWithoutExtension)
  );
  if (cachedFile) {
    return path.join(imageCacheDir, cachedFile);
  }
  return downloadImage(
    url,
    path.join(imageCacheDir, imagePathWithoutExtension)
  );
};

export const retrieveImage = async (
  attributes: NodeAttributes
): Promise<NodeAttributes> => {
  if (!attributes.image) {
    throw Error(`For downloading an image attribute "image" must be set.`);
  }
  const imagePathWithoutExtension = `${encodeBase64(attributes.image)}`;
  if (!openCachePromises[imagePathWithoutExtension]) {
    openCachePromises[imagePathWithoutExtension] = findOrDownload(
      attributes.image,
      imagePathWithoutExtension
    );
  }
  const imagePath = await (openCachePromises[
    imagePathWithoutExtension
  ] as Promise<string>);
  openCachePromises[imagePathWithoutExtension] = null;
  return {
    ...attributes,
    image: imagePath,
  };
};

export const nodes = (...nodes: Node[]): RenderFunc[] => {
  return nodes.map((nodeInstance) => async () =>
    `"${nodeInstance.id}" ${
      nodeInstance.attributes && Object.keys(nodeInstance.attributes).length > 0
        ? `[ ${Object.entries(
            nodeInstance.imageDownload
              ? await retrieveImage(nodeInstance.attributes)
              : nodeInstance.attributes
          )
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")} ]`
        : ""
    }; `
  );
};

const nodeIdGenerator = generateUniqueIds();

export const getUniqueNodeId = (): string => {
  return `a${nodeIdGenerator.next().value}`;
};
