import { Node, getUniqueNodeId } from "@diagrams-ts/graphviz-functional-ts";

export const createProvider = (imagePath: string) => (label: string): Node => ({
  id: getUniqueNodeId(),
  attributes: {
    label,
    shape: "none",
    image: imagePath,
    height: 1.4 + 0.2 * ([...label].filter((char) => char === "\n").length + 1),
  },
  pluginSettings: {
    localImageCache: {
      retrieveImage: true,
    },
  },
});