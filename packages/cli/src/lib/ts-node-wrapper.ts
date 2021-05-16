import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);

export const runTsNodeForFile = async (
  file: string,
  logTsNode = true
): Promise<void> => {
  const { stdout, stderr } = await execAsync(`ts-node-script ${file}`);

  if (stdout?.length > 0) {
    console.log(logTsNode ? "ts-node:" : "", stdout);
  }

  if (stderr?.length > 0) {
    console.error("stderr:ts-node", stderr);
  }
};

export const runTsNodeForString = async (
  input: string,
  logTsNode = true
): Promise<void> => {
  const { stdout, stderr } = await execAsync(`ts-node -e '${input}'`);

  if (stdout?.length > 0) {
    console.log(logTsNode ? "ts-node:" : "", stdout);
  }

  if (stderr?.length > 0) {
    console.error("stderr:ts-node", stderr);
  }
};
