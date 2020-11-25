import { promises } from "fs";

type ScrapedAttribute = {
  name: string;
  graphVizTypes: string[];
  default: string;
  minimum: string;
  notes: string;
};

interface Map {
  [key: string]: string | undefined;
}

const mapGraphvizToTs: Map = {
  double: "number",
  int: "number",
  string: "string",
  bool: "boolean",
};

const getTypesFromGraphvizTypes = (graphvizTypes: string[]) => {
  const types = graphvizTypes.map(
    (graphvizType) => mapGraphvizToTs[graphvizType] || "string"
  );
  return [...new Set(types)];
};

const generateAttributeSet = (
  key: string,
  attributes: ScrapedAttribute[]
): string => {
  const [firstChar, ...rest] = key;
  const capitalized = [firstChar.toUpperCase(), ...rest].join("");
  return `export type ${capitalized}Attributes = {
        ${attributes
          .map(
            ({ name, graphVizTypes }) =>
              `${name}?:${getTypesFromGraphvizTypes(graphVizTypes).join(" | ")};
            `
          )
          .join("")}
    }`;
};

(async () => {
  const content = await promises.readFile("./scripts/scraped-attributes.json");
  const attributes = JSON.parse(content.toString());

  const typeFile = `// THIS FILE IS GENERATED 

     ${Object.keys(attributes)
       .map((key) => generateAttributeSet(key, attributes[key]))
       .join("\n\n")}

  `;
  await promises.writeFile("./src/graph/generated/attributes.ts", typeFile);
})()
  .then(() => "Created.")
  .catch((reason) => console.log(reason));
