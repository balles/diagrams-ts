import commander, { Command } from "commander";

export const templateCommand = (): commander.Command => {
  const template = new Command("template");
  template.description(
    "create template to render diagrams function (not implemented)"
  );
  template.action(async () => console.log(`Not yet implemented`));
  return template;
};
