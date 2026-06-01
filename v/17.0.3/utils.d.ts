export declare const regex: {
    re: RegExp;
};
export declare const UFE0Fg: RegExp;
export declare const U200D: string;
export interface ResolvedOptions {
    callback: (iconId: string, options: ResolvedOptions) => string | false;
    attributes: (rawText: string, iconId: string) => Record<string, string> | null;
    base: string;
    ext: string;
    size: string;
    className: string;
    onerror: ((this: HTMLImageElement) => void);
}
export declare function fromCodePoint(codepoint: string | number): string;
export declare function toCodePoint(unicodeSurrogates: string, sep?: string): string;
export declare function escapeHTML(s: string): string;
export declare function grabTheRightIcon(rawText: string): string;
export declare function defaultImageSrcGenerator(icon: string, options: ResolvedOptions): string;
export declare function toSizeSquaredAsset(value: string | number): string;
export declare function returnNull(): null;
