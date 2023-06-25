import { CaretPosition } from 'typescript/types/highlighter';

export interface NotifyCaretPositionProps {
  caretElement: undefined;
  position: CaretPosition;
  setPosition: React.Dispatch<React.SetStateAction<CaretPosition>>;
  onCaretPositionChange: (ele: CaretPosition) => void;
}

export const notifyCaretPosition = ({
  caretElement,
  position,
  setPosition,
  onCaretPositionChange
}: NotifyCaretPositionProps) => {
  if (!caretElement) {
    return;
  }

  const { offsetLeft, offsetTop } = caretElement;

  if (position.left === offsetLeft && position.top === offsetTop) {
    return;
  }

  const newPosition: CaretPosition = { left: offsetLeft, top: offsetTop };
  setPosition(newPosition);

  onCaretPositionChange(newPosition);
};
