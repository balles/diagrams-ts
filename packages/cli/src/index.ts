#!/usr/bin/env node

// Running from node will only work after transpilation to JS!
import { Command } from "commander";
import { versionCommand } from "./lib/version-command";
import { renderCommand } from "./lib/render-command";
import { dotCommand } from "./lib/dot-command";
import { templateCommand } from "./lib/template-command";

const diagramsCli = new Command();

diagramsCli.addCommand(versionCommand());
diagramsCli.addCommand(renderCommand());
diagramsCli.addCommand(dotCommand());
diagramsCli.addCommand(templateCommand());

diagramsCli.parseAsync(process.argv).catch(console.error);
