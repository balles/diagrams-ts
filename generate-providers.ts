import { promises } from "fs";
import { join } from "path";
import rimraf from "rimraf";

const assetDirectory = "./assets";
const targetDirectory = "./src/providers/generated";

const getFactoryCode = (
  srcProviderDirectory: string,
  category: string,
  node: string
): string => {
  const factoryName = node.split(".")[0].toLowerCase().split("-").join("_");
  return `export const ${factoryName} = createProvider('"${join(
    srcProviderDirectory,
    category,
    node
  )}"');`;
};

const generateProviderCategory = async (
  category: string,
  srcProviderDirectory: string,
  targetProviderDirectory: string
): Promise<void> => {
  const categoryFile = join(targetProviderDirectory, `${category}.ts`);
  const files = (
    await promises.readdir(join(srcProviderDirectory, category))
  ).filter((file) => !file.includes("rounded") && file.endsWith(".png"));
  await promises.writeFile(
    categoryFile,
    `import { createProvider } from "../../create-provider";

    ${files
      .map((file) => getFactoryCode(srcProviderDirectory, category, file))
      .join("\n")}
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
      generateProviderCategory(
        category,
        srcProviderDirectory,
        targetProviderDirectory
      )
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
