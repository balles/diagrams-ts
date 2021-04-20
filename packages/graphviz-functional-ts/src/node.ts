import { NodeAttributes } from "./generated/attributes";
import { RenderFunc, generateUniqueIds } from "./render-function";

type PluginSettings = Record<string, Record<string, unknown>>;

export type Node = {
  id: string;
  attributes?: NodeAttributes;
  pluginSettings?: PluginSettings;
};

export type NodeAttributesPlugin = (
  attributes: NodeAttributes,
  settings?: PluginSettings
) => Promise<NodeAttributes>;

export const runPlugins = async (
  attributes: NodeAttributes,
  pluginSettings: PluginSettings | undefined,
  plugins: NodeAttributesPlugin[]
): Promise<NodeAttributes> => {
  if (!attributes) {
    return attributes;
  }
  const transformedAttributes = plugins.reduce(
    async (atts, plugin) => plugin(await atts, pluginSettings),
    Promise.resolve(attributes)
  );
  return transformedAttributes;
};

// TODO verify that plugins are valid!

export const nodes = (...nodes: Node[]): RenderFunc[] => {
  return nodes.map((nodeInstance) => async (props) =>
    `"${nodeInstance.id}" ${
      nodeInstance.attributes && Object.keys(nodeInstance.attributes).length > 0
        ? `[ ${Object.entries(
            props?.nodePlugins
              ? await runPlugins(
                  nodeInstance.attributes,
                  nodeInstance.pluginSettings,
                  props.nodePlugins as NodeAttributesPlugin[]
                )
              : nodeInstance.attributes
          )
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")} ]`
        : ""
    }; `
  );
};

const nodeIdGenerator = generateUniqueIds();

export const getUniqueNodeId = (): string => {
  return `a${nodeIdGenerator.next().value}`;
};
