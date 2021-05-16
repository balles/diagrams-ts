import path from "path";

const rendererToImportMap = {
  CLI: `import { CliRenderer } from "@diagrams-ts/graphviz-cli-renderer"`,
  WASM: `import { WasmRenderer } from "@diagrams-ts/graphviz-wasm-renderer"`,
  NONE: `import { passThroughRenderer } from "@diagrams-ts/core"`,
};

const rendererMap = {
  CLI: "CliRenderer",
  WASM: "WasmRenderer",
  NONE: "passThroughRenderer",
};

export type GetRenderFileContentArgs = {
  label: string;
  inputFile: string;
  direction: string; //TODO "LR" | "TB" | "RL" | "BT";
  outformat: string;
  filename?: string;
  renderer: string; //TODO "CLI" | "WASM" | "NONE";
  useLocalImages: boolean;
};

export const getRenderFileContent = ({
  label,
  inputFile,
  direction,
  outformat,
  filename,
  renderer,
  useLocalImages,
}: GetRenderFileContentArgs): string => {
  // TODO replace missing parameters with other parameters/defaults
  // TODO remove typecast in map
  const importFileName = path.basename(inputFile, path.extname(inputFile));
  return `
    import { createDiagramCore } from "@diagrams-ts/core";
    ${rendererToImportMap[renderer as "CLI" | "WASM" | "NONE"]};
    import diagramToRender from "./${importFileName}";
    import { Renderer } from "@diagrams-ts/graphviz-functional-ts";
    ${
      useLocalImages
        ? 'import { LocalImageCachePlugin } from "@diagrams-ts/local-image-cache-plugin";'
        : ""
    }
  
    
    (async () => {
      try {
        const result = await createDiagramCore({
          label: "${label}",
          filename: "${filename}",
          direction: "${direction}",
          outformat: "${outformat}",
          renderer: ${
            rendererMap[renderer as "CLI" | "WASM" | "NONE"]
          } as Renderer<string>,
          nodePlugins: ${useLocalImages ? "[LocalImageCachePlugin]" : "[]"},
        })(diagramToRender());
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
    `;
};
