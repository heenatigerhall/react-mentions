/// <reference types="react" />
declare module "utils/ts/combineRegExps" {
    export const combineRegExps: (regExps: RegExp[]) => RegExp;
}
declare module "utils/ts/countPlaceholders" {
    export const countPlaceholders: (markup: string) => number;
}
declare module "utils/ts/escapeRegex" {
    export const escapeRegex: (str: string) => string;
}
declare module "utils/ts/placeholders" {
    export const PLACEHOLDERS: {
        id: string;
        display: string;
    };
}
declare module "utils/ts/findPositionOfCapturingGroup" {
    export const findPositionOfCapturingGroup: (markup: string, parameterName: string) => number;
}
declare module "utils/ts/makeMentionsMarkup" {
    export const makeMentionsMarkup: (markup: string, id: string, display: string) => string;
}
declare module "utils/ts/markupToRegex" {
    export const markupToRegex: (markup: string) => RegExp;
}
declare module "typescript/types/types" {
    import * as React from 'react';
    /**
     * The properties for the @see MentionsInput component.
     */
    export interface MentionsInputProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onBlur' | 'onKeyDown' | 'onSelect'> {
        /**
         * If set to `true` a regular text input element will be rendered
         * instead of a textarea
         */
        singleLine?: boolean | undefined;
        /**
         * If set to `true` spaces will not interrupt matching suggestions
         */
        allowSpaceInQuery?: boolean | undefined;
        allowSuggestionsAboveCursor?: boolean | undefined;
        forceSuggestionsAboveCursor?: boolean | undefined;
        ignoreAccents?: boolean | undefined;
        value?: string | undefined;
        onChange?: OnChangeHandlerFunc | undefined;
        placeholder?: string | undefined;
        onBlur?: ((event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>, clickedSuggestion: boolean) => void) | undefined;
        onSelect?: ((event: React.UIEvent) => void) | undefined;
        onKeyDown?: ((event: React.KeyboardEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
        children: React.ReactElement<MentionProps> | Array<React.ReactElement<MentionProps>>;
        className?: string | undefined;
        classNames?: any;
        style?: any;
        customSuggestionsContainer?: (children: React.ReactNode) => React.ReactNode | undefined;
        suggestionsPortalHost?: Element | undefined;
        inputRef?: React.Ref<HTMLTextAreaElement> | React.Ref<HTMLInputElement> | undefined;
        /**
         * This label would be exposed to screen readers when suggestion popup appears
         * @default ''
         */
        a11ySuggestionsListLabel?: string | undefined;
    }
    /**
     * Exposes the type for use with the @see MentionsInputComponent.wrappedInstance which is added by react-mentions' use of substyle (https://github.com/jfschwarz/substyle).
     */
    export interface MentionsInputComponentUnrwapped extends React.Component<MentionsInputProps> {
        /**
         * @deprecated since version 2.4.0. Please use @see MentionsInputProps.inputRef
         */
        inputRef?: HTMLInputElement | HTMLTextAreaElement | undefined;
    }
    /**
     * Used with @see React.RefObject<MentionsInputComponent>.
     */
    export interface MentionsInputComponent extends React.Component<MentionsInputProps> {
        wrappedInstance?: MentionsInputComponentUnrwapped | undefined;
    }
    /**
     * Used to reference MentionsInput element in a TSX file.
     */
    export interface MentionsInputClass extends React.ComponentClass<MentionsInputProps> {
    }
    /**
     * Props definition for a mention subelement.
     */
    export interface MentionProps {
        onAdd?: ((id: string | number, display: string) => void) | undefined;
        renderSuggestion?: ((suggestion: SuggestionDataItem, search: string, highlightedDisplay: React.ReactNode, index: number, focused: boolean) => React.ReactNode) | undefined;
        className?: string | undefined;
        markup?: string | undefined;
        displayTransform?: DisplayTransformFunc | undefined;
        trigger: string | RegExp;
        isLoading?: boolean | undefined;
        data: SuggestionDataItem[] | DataFunc;
        style?: any;
        appendSpaceOnAdd?: boolean | undefined;
        regex?: RegExp | undefined;
    }
    /**
     * The shape of a mention.
     */
    export interface MentionItem {
        display: string;
        id: string;
        childIndex: number;
        index: number;
        plainTextIndex: number;
    }
    /**
     * The shape of suggestion items.
     */
    export interface SuggestionDataItem {
        id: string | number;
        display?: string;
    }
    /**
     * Defines the function signature for implementing @see MentionsInputProps.displayTransform
     */
    export type DisplayTransformFunc = (id: string, display: string) => string;
    /**
     * Defines the function signature for implementing @see MentionsInputProps.onChange
     */
    export type OnChangeHandlerFunc = (event: {
        target: {
            value: string;
        };
    }, newValue: string, newPlainTextValue: string, mentions: MentionItem[]) => void;
    /**
     * The function to implement asynchronous loading of suggestions in @see MentionProps.data .
     */
    export type DataFunc = (query: string, callback: (data: SuggestionDataItem[]) => void) => Promise<void> | void | Promise<SuggestionDataItem[]> | SuggestionDataItem[];
}
declare module "typescript/types/highlighter" {
    export interface CaretPosition {
        left: string | number;
        top: string | number;
    }
    export interface HighlighterProps {
        selectionStart: number;
        selectionEnd: number;
        value: string;
        onCaretPositionChange: (ele: CaretPosition) => void;
        containerRef: any;
        children: React.ReactNode | React.ReactNode[];
        style: any;
    }
}
declare module "typescript/types/suggestion" {
    export interface SuggestionProps {
        id: string;
        focused: boolean;
        ignoreAccents: boolean;
        index: number;
        onClick: () => void;
        onMouseEnter: () => void;
        query: string;
        renderSuggestion: (suggestion: any, query: string, highlightedDisplay: React.ReactNode, index: string | number, focused: boolean) => React.ReactNode;
        suggestion: any;
        style: any;
        className: string;
        classNames: string;
    }
}
declare module "typescript/types/index" {
    export * from "typescript/types/types";
    export * from "typescript/types/highlighter";
    export * from "typescript/types/suggestion";
}
declare module "utils/ts/readConfigFromChildren" {
    import { Children } from 'react';
    type Children = React.ReactNode | React.ReactNode[];
    export const readConfigFromChildren: (children: Children) => {
        markup: string;
        regex: RegExp;
        displayTransform: (id?: string, display?: string) => string;
    }[];
    export const coerceCapturingGroups: (regex: RegExp, markup?: string) => RegExp;
}
declare module "utils/ts/spliceString" {
    export const spliceString: (str: string, start: number, end: number, insert: string) => string;
}
declare module "utils/ts/highlighter" {
    import { CaretPosition } from "typescript/types/highlighter";
    export interface NotifyCaretPositionProps {
        caretElement: undefined;
        position: CaretPosition;
        setPosition: React.Dispatch<React.SetStateAction<CaretPosition>>;
        onCaretPositionChange: (ele: CaretPosition) => void;
    }
    export const notifyCaretPosition: ({ caretElement, position, setPosition, onCaretPositionChange }: NotifyCaretPositionProps) => void;
}
declare module "utils/ts/index" {
    export * from "utils/ts/combineRegExps";
    export * from "utils/ts/countPlaceholders";
    export * from "utils/ts/escapeRegex";
    export * from "utils/ts/findPositionOfCapturingGroup";
    export * from "utils/ts/makeMentionsMarkup";
    export * from "utils/ts/markupToRegex";
    export * from "utils/ts/placeholders";
    export * from "utils/ts/readConfigFromChildren";
    export * from "utils/ts/spliceString";
    export * from "utils/ts/highlighter";
}
declare module "utils/iterateMentionsMarkup" {
    export const iterateMentionsMarkup: (value: string, config: any, markupIteratee: any, textIteratee?: any) => void;
}
declare module "utils/getPlainText" {
    export function getPlainText(value: any, config: any): string;
}
declare module "utils/mapPlainTextIndex" {
    export function mapPlainTextIndex(value: any, config: any, indexInPlainText: any, inMarkupCorrection?: string): any;
}
declare module "utils/applyChangeToValue" {
    export function applyChangeToValue(value: any, plainTextValue: any, { selectionStartBefore, selectionEndBefore, selectionEndAfter }: {
        selectionStartBefore: any;
        selectionEndBefore: any;
        selectionEndAfter: any;
    }, config: any): string;
}
declare module "utils/findStartOfMentionInPlainText" {
    export function findStartOfMentionInPlainText(value: any, config: any, indexInPlainText: any): any;
}
declare module "utils/getMentions" {
    export function getMentions(value: any, config: any): any[];
}
declare module "utils/getSuggestionHtmlId" {
    export function getSuggestionHtmlId(prefix: any, id: any): string;
}
declare module "utils/countSuggestions" {
    export function countSuggestions(suggestions: any): any;
}
declare module "utils/getEndOfLastMention" {
    export function getEndOfLastMention(value: any, config: any): any;
}
declare module "utils/diacritics" {
    export const lettersDiacritics: {
        base: string;
        letters: RegExp;
    }[];
}
declare module "utils/getSubstringIndex" {
    export function removeAccents(str: any): any;
    export function normalizeString(str: any): any;
    export function getSubstringIndex(str: any, substr: any, ignoreAccents: any): any;
}
declare module "utils/isIE" {
    export function isIE(): boolean;
}
declare module "utils/isNumber" {
    export function isNumber(val: any): boolean;
}
declare module "utils/isPlainObject" {
    export function isPlainObject(obj: any): boolean;
}
declare module "utils/keys" {
    export function keys(obj: any): string[];
}
declare module "utils/mergeDeep" {
    export function mergeDeep(target: any, source: any): any;
}
declare module "utils/merge" {
    export function merge(target: any, ...sources: any[]): any;
}
declare module "utils/omit" {
    export function omit(obj: any, ...rest: any[]): {};
}
declare module "utils/defaultStyle" {
    export function createDefaultStyle(defaultStyle: any, getModifiers: any): (ComponentToWrap: any) => React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    import React from "react";
}
declare module "utils/index" {
    export { getPlainText } from "./getPlainText";
    export { applyChangeToValue } from "./applyChangeToValue";
    export { findStartOfMentionInPlainText } from "./findStartOfMentionInPlainText";
    export { getMentions } from "./getMentions";
    export { getSuggestionHtmlId } from "./getSuggestionHtmlId";
    export { countSuggestions } from "./countSuggestions";
    export { getEndOfLastMention } from "./getEndOfLastMention";
    export { mapPlainTextIndex } from "./mapPlainTextIndex";
    export { iterateMentionsMarkup } from "./iterateMentionsMarkup";
    export { getSubstringIndex } from "./getSubstringIndex";
    export { isIE } from "./isIE";
    export { isNumber } from "./isNumber";
    export { merge } from "./merge";
    export { omit } from "./omit";
    export { keys } from "./keys";
    export { createDefaultStyle as defaultStyle } from "./defaultStyle";
    export * from "utils/ts";
}
declare module "Highlighter" {
    import * as React from 'react';
    const _default: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    export default _default;
}
declare module "Suggestion" {
    import React from 'react';
    const _default_1: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    export default _default_1;
}
declare module "typescript/LoadingIndicator/style" {
    export const lineStyle: {
        borderRadius: string;
        height: string;
        marginBottom: string;
        background: string;
        backgroundSize: string;
        animation: string;
        amimationFillMode: string;
    };
}
declare module "typescript/LoadingIndicator/components/LoadingUserItem" {
    import * as React from 'react';
    export function LoadingUserItem(): React.JSX.Element;
}
declare module "typescript/LoadingIndicator/components/index" {
    export * from "typescript/LoadingIndicator/components/LoadingUserItem";
}
declare module "typescript/LoadingIndicator/LoadingIndicator" {
    import React from 'react';
    import useStyles from 'substyle';
    export function LoadingIndicator({ style, className, classNames }: useStyles.StylingProps): React.JSX.Element;
}
declare module "typescript/LoadingIndicator/types" {
    export interface LoadingIndictorProps {
    }
}
declare module "typescript/LoadingIndicator/index" {
    export * from "typescript/LoadingIndicator/LoadingIndicator";
    export * from "typescript/LoadingIndicator/style";
    export * from "typescript/LoadingIndicator/types";
}
declare module "typescript/index" {
    export * from "typescript/LoadingIndicator/index";
}
declare module "SuggestionsOverlay" {
    const _default: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    export default _default;
    import React from "react";
}
declare module "MentionsInput" {
    export function makeTriggerRegex(trigger: any, options?: {}): RegExp;
    const _default: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    export default _default;
    import React from "react";
}
declare module "typescript/Mention/Mention" {
    import React from 'react';
    import useStyles from 'substyle';
    import { MentionProps } from "typescript/types/index";
    export interface ExtendedProps {
        display: string;
    }
    export const Mention: {
        ({ display, style, className, classNames, }: MentionProps & useStyles.StylingProps & ExtendedProps): React.JSX.Element;
        defaultProps: {
            trigger: string;
            markup: string;
            displayTransform: (id?: string, display?: string) => string;
            onAdd: () => any;
            onRemove: () => any;
            renderSuggestion: any;
            isLoading: boolean;
            appendSpaceOnAdd: boolean;
        };
    };
    export default Mention;
}
declare module "index" {
    export { default as MentionsInput } from "./MentionsInput";
    export { default as Mention } from "./typescript/Mention/Mention";
}
declare module "tests/MentionsInput.spec" {
    export {};
}
declare module "utils/tests/applyChangeToValue.spec" {
    export {};
}
declare module "utils/tests/combineRegExps.spec" {
    export {};
}
declare module "utils/tests/findPositionOfCapturingGroup.spec" {
    export {};
}
declare module "utils/tests/findStartOfMentionInPlainText.spec" {
    export {};
}
declare module "utils/tests/getEndOfLastMention.spec" {
    export {};
}
declare module "utils/tests/getMentions.spec" {
    export {};
}
declare module "utils/tests/getPlainText.spec" {
    export {};
}
declare module "utils/tests/getSubstringIndex.spec" {
    export {};
}
declare module "utils/tests/getSuggestionHtmlId.spec" {
    export {};
}
declare module "utils/tests/isNumber.spec" {
    export {};
}
declare module "utils/tests/isPlainObject.spec" {
    export {};
}
declare module "utils/tests/iterateMentionsMarkup.spec" {
    export {};
}
declare module "utils/tests/keys.spec" {
    export {};
}
declare module "utils/tests/mapPlainTextIndex.spec" {
    export {};
}
declare module "utils/tests/markupToRegex.spec" {
    export {};
}
declare module "utils/tests/merge.spec" {
    export {};
}
declare module "utils/tests/omit.spec" {
    export {};
}
declare module "utils/tests/spliceString.spec" {
    export {};
}
