import { promises } from "fs";
import { join } from "path";
import rimraf from "rimraf";
import generationConfig from "./generation-config.json";

type UpperWords = Record<string, string[]>;
type TitleWords = Record<string, Record<string, string>>;
type Aliases = Record<string, Record<string, Record<string, string>>>;

const upperWords = generationConfig.upperWords as UpperWords;
const titleWords = generationConfig.titleWords as TitleWords;
const aliases = generationConfig.aliases as Aliases;

const assetDirectory = "./assets";
const targetDirectory = "./src/providers/generated";

const getRepositoryUrl = ({
  commit,
  provider,
  category,
  fileName,
}: {
  commit?: string;
  provider: string;
  category: string;
  fileName: string;
}): string =>
  `https://github.com/mingrammer/diagrams/raw/${commit}/resources/${provider}/${category}/${fileName}`;

const getAliases = (fileName: string, provider: string, category: string) => {
  const nodeName = mapFileNameToNodeName(fileName, provider);
  if (aliases?.[provider]?.[category]?.[nodeName]) {
    return `export const ${aliases[provider][category][nodeName]} = ${nodeName}; 
    `;
  }
  return "";
};

const mapNamePart = (namePart: string, provider: string): string => {
  if (upperWords[provider]?.includes(namePart)) {
    return namePart.toUpperCase();
  }
  if (titleWords?.[provider]?.[namePart]) {
    return titleWords[provider][namePart];
  }
  const [firstLetter, ...rest] = namePart;
  return [firstLetter.toUpperCase(), ...rest].join("");
};

const mapFileNameToNodeName = (fileName: string, provider: string): string => {
  const nameParts = fileName
    .split(".")[0]
    .split("-")
    .filter((part) => part !== "");
  return nameParts.reduce((acc, namePart) => {
    return `${acc}${mapNamePart(namePart, provider)}`;
  }, "");
};

const getFactoryCode = ({
  provider,
  category,
  fileName,
  commit,
}: {
  provider: string;
  category: string;
  fileName: string;
  commit: string;
}): string => {
  const factoryName = mapFileNameToNodeName(fileName, provider);
  return `export const ${factoryName} = createProvider("${getRepositoryUrl({
    commit,
    provider,
    category,
    fileName,
  })}");`;
};

const generateProviderCategory = async ({
  provider,
  category,
  srcProviderDirectory,
  targetProviderDirectory,
  commit,
}: {
  provider: string;
  category: string;
  srcProviderDirectory: string;
  targetProviderDirectory: string;
  commit: string;
}): Promise<void> => {
  const categoryFile = join(targetProviderDirectory, `${category}.ts`);
  const files = (
    await promises.readdir(join(srcProviderDirectory, category))
  ).filter((file) => !file.includes("rounded") && file.endsWith(".png"));

  await promises.writeFile(
    categoryFile,
    `import { createProvider } from "../../create-provider";

    ${files
      .map((file) =>
        getFactoryCode({ provider, category, fileName: file, commit })
      )
      .join("\n")}

    ${files
      .map((file) => getAliases(file, provider, category))
      .filter((alias) => alias !== "")
      .join("")}
    `
  );
};

const generateProvider = async (
  provider: string,
  commit: string
): Promise<void> => {
  const srcProviderDirectory = join(assetDirectory, provider);
  const targetProviderDirectory = join(targetDirectory, provider);
  await promises.mkdir(targetProviderDirectory);
  const subDirectories = (await promises.readdir(srcProviderDirectory)).filter(
    (scanResult) => !scanResult.startsWith(".") && !scanResult.endsWith(".png")
  );
  await Promise.all(
    subDirectories.map(async (category) =>
      generateProviderCategory({
        provider,
        category,
        srcProviderDirectory,
        targetProviderDirectory,
        commit,
      })
    )
  );
  await promises.writeFile(
    join(targetProviderDirectory, "index.ts"),
    `${subDirectories
      .map(
        (subDirectory) =>
          `import * as ${subDirectory} from "./${subDirectory}";`
      )
      .join("\n")}
  
  export {${subDirectories.join(",")}};`
  );
};

const main = async (commit: string): Promise<void> => {
  rimraf.sync(targetDirectory);
  await promises.mkdir(targetDirectory);
  const directories = (await promises.readdir(assetDirectory)).filter(
    (scanResult) => !scanResult.startsWith(".")
  );
  await Promise.all(
    directories.map((directory) => generateProvider(directory, commit))
  );
};

const commit = process.argv[2];

main(commit)
  .then(() => console.log("Done."))
  .catch((reason) => console.log(reason));
