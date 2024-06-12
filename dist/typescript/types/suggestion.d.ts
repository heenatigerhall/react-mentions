/// <reference types="react" />
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
