import commander from "commander";

export const addCommonOptions = (command: commander.Command): void => {
  command
    .option("-l,--label [label]", "label to apply to the diagram", "")
    .option(
      "-d,--direction [direction]",
      'layout direction left to right or top to bottom, possible values are "LR","TB","RL","BT"',
      "LR"
    );
  command.option("-a,--stand-alone", "run outside of typescript project");
  command.option(
    "-k,--keep",
    "keep the working directory, only works with 'stand-alone' mode"
  );
  command.option(
    "-i,--local-images ",
    "retrieve images from URLs and use local version of images"
  );
};
