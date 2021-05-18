import { promises } from "fs";
import path from "path";
import {
  getRenderFileContent,
  GetRenderFileContentArgs,
} from "./get-renderer-content";

// If you don't use yarn or you use another location for your global modules
// you'll need to set this environment variable for stand-alone mode. e.g.:
//
// export DIAGRAMS_GLOBAL_MODULES=$(yarn global bin)/node_modules
//
// or
//
// export DIAGRAMS_GLOBAL_MODULES=$(npm root -g)
const pathToGlobalNodeModules =
  process.env.DIAGRAMS_GLOBAL_MODULES || "~/.config/yarn/global/node_modules";

const { mkdir, copyFile, writeFile, symlink } = promises;

export const createRenderDirectory = async ({
  label,
  inputFile,
  direction,
  filename,
  renderer,
  outformat,
  useLocalImages,
}: GetRenderFileContentArgs): Promise<string> => {
  const tempDirectory = process.pid.toString();
  const fileWithDiagram = path.join(tempDirectory, path.basename(inputFile));
  const fileToRun = path.join(tempDirectory, "create-diagram.ts");
  await mkdir(process.pid.toString());
  await Promise.all([
    await copyFile(inputFile, fileWithDiagram),
    await copyFile(
      path.join(__dirname, "../../template-files/template.tsconfig.json"),
      path.join(tempDirectory, "tsconfig.json")
    ),
    await copyFile(
      path.join(__dirname, "../../template-files/template.package.json"),
      path.join(tempDirectory, "package.json")
    ),
    await symlink(
      pathToGlobalNodeModules,
      path.join(tempDirectory, "node_modules"),
      "dir"
    ),
    await writeFile(
      fileToRun,
      getRenderFileContent({
        label,
        inputFile,
        direction,
        filename,
        renderer,
        outformat,
        useLocalImages,
      })
    ),
  ]);
  return fileToRun;
};
