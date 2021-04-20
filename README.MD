# diagrams-ts

![logo](https://github.com/balles/diagrams-ts/raw/main/generated-assets/logo-small.png)

Monorepository for `TypeScript`-Port of the python library [`diagrams` by mingrammer](https://diagrams.mingrammer.com/).
Creating architecture diagrams directly from code.

## About

Inspired by the nice visuals and easy to read syntax of the original library, this port tries to provide the same for `Typescript`.
Styles and the `Nodes` are taken from the original library. It also uses `graphviz` for the final graph rendering.

## Structure

The main package containing the complete nodejs package can be found in the `packages/diagrams-ts`directory.

`packages/graphviz-cli-renderer` contains a thin nodejs wrapper for the `dot`cli tool.

`packages/graphviz-functional-ts` contains the package used to construct `dot`output files from typescript functions.

## Installation and Requirements

In order to create `svg`, `png` or `webp` output you'll need to install [graphviz](https://graphviz.org/download/). This package expects `dot` cli of `graphviz` to be available in your `path`.
You can check this by running:

```sh
dot -v
```

This package is build for ES2015. For developing you'll need a `node` version >= 14.

Install this package by running:

```sh
npm install diagrams-ts

# or when using yarn

yarn add diagram-ts
```

For more examples of the syntax you can take look at the examples folder. In order to run them, you can use `ts-node` e.g.:

```sh
# In the project root:

yarn ts-node ./examples/diagrams-example.ts

```
