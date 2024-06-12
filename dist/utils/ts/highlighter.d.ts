/// <reference types="react" />
import { CaretPosition } from 'typescript/types/highlighter';
export interface NotifyCaretPositionProps {
    caretElement: undefined;
    position: CaretPosition;
    setPosition: React.Dispatch<React.SetStateAction<CaretPosition>>;
    onCaretPositionChange: (ele: CaretPosition) => void;
}
export declare const notifyCaretPosition: ({ caretElement, position, setPosition, onCaretPositionChange }: NotifyCaretPositionProps) => void;
