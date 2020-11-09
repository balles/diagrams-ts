import { spawn } from "child_process";

// TODO: add Types for format
// TODO: tests

export const renderDot = async ({
  format,
  outputFile,
  input,
}: {
  format: string;
  outputFile: string;
  input: string;
}): Promise<string> => {
  return new Promise((resolve, reject) => {
    const dot = spawn("dot", [`-o${outputFile}`, `-T${format}`]);

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
