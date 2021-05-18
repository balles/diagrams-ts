import commander, { Command } from "commander";
import { promises } from "fs";
import path from "path";

const getVersion = async (): Promise<string> => {
  let version = "error";
  const packagePath = path.join(__dirname, "../../package.json");
  try {
    version =
      JSON.parse((await promises.readFile(packagePath)).toString())?.version ||
      "not defined";
  } catch (err) {
    console.error(err);
  }
  return version;
};

export const versionCommand = (): commander.Command => {
  const template = new Command("version");
  template.description("outputs the version of the CLI");
  template.action(async () => console.log(await getVersion()));
  return template;
};
