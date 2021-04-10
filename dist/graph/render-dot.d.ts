export declare const CliRenderer: ({ format, outputFile, }: {
    format: string;
    outputFile: string;
}) => (input: string) => Promise<string>;
export declare const renderDot: ({ format, outputFile, input, }: {
    format: string;
    outputFile: string;
    input: string;
}) => Promise<string>;
