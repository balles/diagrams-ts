import commander, { Command } from "commander";

export const dotCommand = (): commander.Command => {
  const dot = new Command("dot");
  dot.description("render diagrams function to dot output (not implemented)");
  dot.action(() => console.log(`Not yet implemented`));
  return dot;
};
