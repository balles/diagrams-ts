import {
  EdgeAttributes,
  GraphAttributes,
  NodeAttributes,
  NodeAttributesPlugin,
  Renderer,
  RenderFunc,
} from "@diagrams-ts/graphviz-functional-ts";
import { createDiagramCore } from "@diagrams-ts/core";
import { CliRenderer } from "@diagrams-ts/graphviz-cli-renderer";
import { LocalImageCachePlugin } from "@diagrams-ts/local-image-cache-plugin";

export type CreateDiagramArguments<T> = {
  label: string;
  direction?: string;
  outformat?: string;
  filename?: string;
  graphAttr?: GraphAttributes;
  nodeAttr?: NodeAttributes;
  edgeAttr?: EdgeAttributes;
  renderer?: Renderer<T>;
  dotPath?: string;
  nodePlugins?: NodeAttributesPlugin[];
  retrieveImage?: boolean; // deprecated - will be removed with next breaking release - DO NOT USE together with nodePlugins
};

export const createDiagram = ({
  label,
  direction,
  outformat = "png",
  filename = `${label}.${outformat}`,
  graphAttr,
  nodeAttr,
  edgeAttr,
  dotPath,
  renderer = CliRenderer as Renderer<string>,
  nodePlugins = [LocalImageCachePlugin],
  retrieveImage = true, // deprecated - will be removed with next breaking release - Use nodePlugins instead
}: CreateDiagramArguments<string>) => async (
  elements: RenderFunc[]
): Promise<string> => {
  const _nodePlugins = retrieveImage ? nodePlugins : [];
  return createDiagramCore({
    label,
    direction,
    outformat,
    filename,
    graphAttr,
    nodeAttr,
    edgeAttr,
    dotPath,
    renderer,
    nodePlugins: _nodePlugins,
  })(elements);
};

export * from "@diagrams-ts/core";
