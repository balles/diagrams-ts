import { providers, diagram } from "@diagrams-ts/core";
import { RenderFunc } from "@diagrams-ts/graphviz-functional-ts";

const { k8s } = providers;

export const exampleDeployment = (): RenderFunc[] => {
  const deployment = k8s.compute.Deploy("Deployment");
  const replicaSet = k8s.compute.ReplicaSet("Replicaset");
  const pods = ["Pod1", "Pod2", "Pod3", "Pod4"].map(k8s.compute.Pod);

  return diagram`
    ${deployment}<<${replicaSet}<<${pods}
  `;
};
