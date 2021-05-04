#!/usr/bin/env ts-node
import { Command } from "commander";
import { renderCommand } from "../lib/render-command";
import { dotCommand } from "../lib/dot-command";
import { templateCommand } from "../lib/template-command";
import { version } from "../package.json";

const diagramsCli = new Command();

diagramsCli.addCommand(renderCommand());
diagramsCli.addCommand(dotCommand());
diagramsCli.addCommand(templateCommand());

diagramsCli
  .command("version")
  .description("outputs the version of the CLI")
  .action(() => console.log(version));

diagramsCli
  .parseAsync(process.argv)
  .catch(console.error)
  .finally(() => console.log("Done."));
