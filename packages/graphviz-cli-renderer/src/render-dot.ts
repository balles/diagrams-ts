import { spawn } from "child_process";

// TODO: add Types for format
// TODO: tests

export type CliRendererArgs = {
  format: string;
  outputFile: string;
  dotPath?: string;
};

export const CliRenderer = (initialArgs: CliRendererArgs) => async (
  input: string
): Promise<string> => {
  return renderDot({ input, ...initialArgs });
};

export const renderDot = async ({
  format,
  outputFile,
  input,
  dotPath = "dot",
}: {
  format: string;
  outputFile: string;
  input: string;
  dotPath?: string;
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    const dot = spawn(dotPath, [`-o${outputFile}`, `-T${format}`]);

    dot.stdout.on("data", function (msg) {
      console.log(`dot: ${msg.toString()}`);
    });

    dot.stderr.on("data", async (data) => {
      reject(data.toString());
    });

    dot.on("exit", (code) => {
      if (code !== 0) {
        reject();
      }
      resolve(outputFile);
    });
    dot.stdin.write(input);
    dot.stdin.end();
  });
};
