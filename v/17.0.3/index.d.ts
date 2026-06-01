export type ParseCallback = (icon: string, options: object, variant: string) => string | false;
export type ReplacerFunction = (substring: string, ...args: any[]) => string;
export type TwemojiOptions = {
    base?: string;
    ext?: string;
    className?: string;
    size?: string | number;
    folder?: string;
    callback?: ParseCallback;
    attributes?(icon: string, variant: string): object;
    onerror?: (this: HTMLImageElement) => void;
};
export type TwemojiConvert = {
    fromCodePoint(hexCodePoint: string): string;
    toCodePoint(utf16surrogatePairs: string, sep?: string): string;
};
export type Twemoji = {
    base: string;
    ext: string;
    className: string;
    size: string;
    convert: TwemojiConvert;
    parse<T extends string | HTMLElement>(node: T, options?: TwemojiOptions | ParseCallback): T extends string ? string : T;
    replace(text: string, replacer: string | ReplacerFunction): string;
    test(text: string): boolean;
    onerror(this: HTMLImageElement): void;
};
declare const twemoji: Twemoji;
export default twemoji;
