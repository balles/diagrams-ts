import { promises } from "fs";
import { join } from "path";
import rimraf from "rimraf";

const assetDirectory = "./assets";
const targetDirectory = "./src/providers/generated";

const defaultCommit = "dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb";

const getRepositoryUrl = ({
  commit = defaultCommit,
  provider,
  category,
  node,
}: {
  commit?: string;
  provider: string;
  category: string;
  node: string;
}): string =>
  `https://github.com/mingrammer/diagrams/raw/${commit}/resources/${provider}/${category}/${node}`;

const getFactoryCode = (
  provider: string,
  category: string,
  node: string
): string => {
  const factoryName = node.split(".")[0].toLowerCase().split("-").join("_");
  return `export const ${factoryName} = createProvider("${getRepositoryUrl({
    provider,
    category,
    node,
  })}");`;
};

const generateProviderCategory = async ({
  provider,
  category,
  srcProviderDirectory,
  targetProviderDirectory,
}: {
  provider: string;
  category: string;
  srcProviderDirectory: string;
  targetProviderDirectory: string;
}): Promise<void> => {
  const categoryFile = join(targetProviderDirectory, `${category}.ts`);
  const files = (
    await promises.readdir(join(srcProviderDirectory, category))
  ).filter((file) => !file.includes("rounded") && file.endsWith(".png"));
  await promises.writeFile(
    categoryFile,
    `import { createProvider } from "../../create-provider";

    ${files.map((file) => getFactoryCode(provider, category, file)).join("\n")}
    `
  );
};

const generateProvider = async (provider: string): Promise<void> => {
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

const main = async (): Promise<void> => {
  rimraf.sync(targetDirectory);
  await promises.mkdir(targetDirectory);
  const directories = (await promises.readdir(assetDirectory)).filter(
    (scanResult) => !scanResult.startsWith(".")
  );
  await Promise.all(directories.map(generateProvider));
};

main()
  .then(() => console.log("Done."))
  .catch((reason) => console.log(reason));
