/// <reference types="react" />
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
