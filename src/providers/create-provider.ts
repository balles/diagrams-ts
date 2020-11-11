import { Node, getUniqueNodeId } from "../graph";

export const createProvider = (imagePath: string) => (label: string): Node => ({
  id: getUniqueNodeId(),
  attributes: { label, shape: "none", image: imagePath },
});
