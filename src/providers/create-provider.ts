import { Node, getUniqueNodeId } from "../graph";

export const createProvider = (imagePath: string) => (label: string): Node => ({
  id: getUniqueNodeId(),
  attributes: { label, shape: "none", image: imagePath, height: 1.4 + 0.4 * ([...label].filter(char=>char==='\n').length+1)}
});
