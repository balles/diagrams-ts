export declare type RenderProperties = Record<string, unknown>;
export declare type RenderFunc = (props?: RenderProperties) => Promise<string>;
export declare type Renderer<T> = (settings: Record<string, unknown>) => (dotInput: string) => Promise<T>;
export declare function generateUniqueIds(): Generator<number, any, any>;
