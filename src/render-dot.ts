import { spawn } from "child_process";
import { promises } from "fs";

// TODO: add Types for format
// TODO: give temp file unique name
// TODO: catch errors promises unlink!
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
  await promises.writeFile("temp.dot", input);
  return new Promise((resolve, reject) => {
    const dot = spawn("dot", [`-o${outputFile}`, `-T${format}`, "temp.dot"]);
    dot.stdout.on("data", function (msg) {
      console.log(`dot: ${msg.toString()}`);
    });

    dot.stderr.on("data", async (data) => {
      await promises.unlink("temp.dot");
      reject(data.toString());
    });

    dot.on("exit", async (code) => {
      if (code === 0) {
        await promises.unlink("temp.dot");
        resolve(outputFile);
      }
    });
  });
};


