import { digraph } from "graphviz";

// Create digraph G
const graph = digraph("G");

// Add node (ID: Hello)
const node1 = graph.addNode("Hello", { color: "blue" });
node1.set("style", "filled");

// Add node (ID: World)
graph.addNode("World");

// Add edge between the two nodes
const edge = graph.addEdge(node1, "World");
edge.set("color", "red");

// Print the dot script
console.log(graph.to_dot());

// Generate a PNG output
graph.output("png", "test01.png");
