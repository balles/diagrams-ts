export type RenderProperties = Record<string, unknown>;
export type RenderFunc = (props?: RenderProperties) => Promise<string>;

export function* generateUniqueIds(): Generator<number, any, any> {
  let i = 0;
  while (true) {
    yield i++;
  }
}
