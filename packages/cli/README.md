# `@diagrams-ts/cli`

A CLI to render `diagrams-ts` functions.

## Prerequisites

### In a typescript project

If you run this from within a project with typescript, you can add the CLI with

```sh
npm install -D @diagrams-ts/cli

# or when using yarn

yarn add -D @diagrams-ts/cli
```

If you plan to use the `"CLI" renderer` you'll need to have graphviz installed and in your path.

The function needs to be exported as the `default` export of the provided function file.

### Global

You can also add the CLI globally:

```sh
npm install @diagrams-ts/cli -g

# or when using yarn

yarn global add @diagrams-ts/cli
```

If you want to use the CLI outside of a typescript project you'll need to run it with the `--stand-alone`/`-a` flag.

In order for the stand-alone mode to work you'll need to set the path to the global modules folder :

```sh
export DIAGRAMS_GLOBAL_MODULES=$(npm root -g)

# or

export DIAGRAMS_GLOBAL_MODULES=$(yarn global bin)/node_modules
```

## Usage

### render

You can use the `render` command to create image output from the command line.

```sh
diagrams-ts render my-graph.ts
```

Outside of a typescript project you'll need to add the -a (stand-alone) flag:

```sh
diagrams-ts render my-graph.ts -a
```

This will create an SVG called `my-graph.ts`.

If you want to create a binary image you'll need to run it with the CLI renderer and pre-fetch all images:

```sh
diagrams-ts render my-graph.ts --renderer "CLI" --format "jpg" --local-images
```

In order to see a description of all options you can use the `-h` flag

### dot

You can use the `dot`command to create output in `dot` format:

```sh
diagrams-ts dot test-graph.ts

# You can for example use the output to directly create the image with dot:

diagrams-ts dot test-graph.ts -i | dot -Tpng -otest-graph.png

```
