export type RenderProperties = Record<string, unknown>;
export type RenderFunc = (props?: RenderProperties) => Promise<string>;

// Can return a string as output path
// But could for example also return a stream
export type Renderer<T> = (
  settings: Record<string, unknown>
) => (dotInput: string) => Promise<T>;

export function* generateUniqueIds(): Generator<number, any, any> {
  let i = 0;
  while (true) {
    yield i++;
  }
}
