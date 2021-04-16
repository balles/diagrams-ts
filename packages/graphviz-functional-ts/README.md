# GraphViz-Functional

Create valid [dot](https://graphviz.org/doc/info/lang.html) output using TypeScript. Get type support for all graph, node and edge properties. Use freely combinable render functions to create your dot input.

## Installation and Requirements

Install this package by running:

```sh
npm install @diagrams-ts/graphviz-functional-ts

# or when using yarn

yarn add @diagrams-ts/graphviz-functional-ts
```

## Usage

```ts
import { edges, createDotGraph } from "@diagrams-ts/graphviz-functional-ts";

createDotGraph([
  ...edges([
    { nodes: [{ id: "a1" }, { id: "b2" }] },
    { nodes: [{ id: "a1" }, { id: "b3" }] },
  ]),
]).then(console.log);

/*
 *  Will log:
 *
 *  digraph "g" {
 *     a1->b2 ;
 *     a3->b4 ;
 *  }
 */
```
