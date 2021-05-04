import commander, { Command } from "commander";

export const renderCommand = (): commander.Command => {
  const render = new Command("render");
  render.description("render diagrams function to an image file");
  render.arguments("<my-file>");
  render.option(
    "-d,--direction [direction]",
    'layout direction, possible values are "LR","TB","RL","BT"',
    "LR"
  );
  render.action(async (path, { direction }) =>
    console.log(`render:${direction},${path}`)
  );
  return render;
};
