#!/usr/bin/env node

// Running from node will only work after transpilation to JS!
import { Command } from "commander";
import { renderCommand } from "./lib/render-command";
import { dotCommand } from "./lib/dot-command";
import { templateCommand } from "./lib/template-command";
// import { version } from "../package.json"; //TODO better way to write version! Use lerna to get updated version?

const diagramsCli = new Command();

diagramsCli.addCommand(renderCommand());
diagramsCli.addCommand(dotCommand());
diagramsCli.addCommand(templateCommand());

diagramsCli
  .command("version")
  .description("outputs the version of the CLI")
  .action(() => console.log("not set now"));

diagramsCli
  .parseAsync(process.argv)
  .catch(console.error)
  .then(() => console.log("Done."));
