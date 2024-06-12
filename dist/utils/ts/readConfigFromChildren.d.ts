import { Children } from 'react';
type Children = React.ReactNode | React.ReactNode[];
export declare const readConfigFromChildren: (children: Children) => {
    markup: string;
    regex: RegExp;
    displayTransform: (id?: string, display?: string) => string;
}[];
export declare const coerceCapturingGroups: (regex: RegExp, markup?: string) => RegExp;
export {};
