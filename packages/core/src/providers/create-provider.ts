import { Node, getUniqueNodeId } from "@diagrams-ts/graphviz-functional-ts";

export const createProvider = (imagePath: string) => (label: string): Node => ({
  id: getUniqueNodeId(),
  attributes: {
    label,
    shape: "none",
    image: imagePath,
    height: 1.9 + 0.4 * [...label].filter((char) => char === "\n").length,
  },
  pluginSettings: {
    localImageCache: {
      retrieveImage: true,
    },
  },
});
