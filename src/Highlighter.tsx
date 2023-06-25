import * as React from 'react';
import { defaultStyle } from './utils';

import {
  iterateMentionsMarkup,
  mapPlainTextIndex,
  readConfigFromChildren,
  isNumber
} from './utils';
import { CaretPosition, HighlighterProps } from 'typescript/types/highlighter';
import { notifyCaretPosition } from 'utils/ts';

const _generateComponentKey = (usedKeys, id) => {
  if (!usedKeys.hasOwnProperty(id)) {
    usedKeys[id] = 0;
  } else {
    usedKeys[id]++;
  }
  return id + '_' + usedKeys[id];
};

function Highlighter({
  selectionStart,
  selectionEnd,
  value = '',
  onCaretPositionChange,
  containerRef,
  children,
  style
}: HighlighterProps) {
  const [position, setPosition] = React.useState<CaretPosition>({
    left: undefined,
    top: undefined
  });
  const [caretElement, setCaretElement] = React.useState();

  React.useEffect(() => {
    notifyCaretPosition({
      caretElement,
      position,
      setPosition,
      onCaretPositionChange
    });
  });

  const config = readConfigFromChildren(children);
  let caretPositionInMarkup;

  if (selectionEnd === selectionStart) {
    caretPositionInMarkup = mapPlainTextIndex(
      value,
      config,
      selectionStart,
      'START'
    );
  }

  const resultComponents = [];
  const componentKeys = {};
  let components = resultComponents;
  let substringComponentKey = 0;

  const textIteratee = (substr, index) => {
    // check whether the caret element has to be inserted inside the current plain substring
    if (
      isNumber(caretPositionInMarkup) &&
      caretPositionInMarkup >= index &&
      caretPositionInMarkup <= index + substr.length
    ) {
      // if yes, split substr at the caret position and insert the caret component
      const splitIndex = caretPositionInMarkup - index;
      components.push(
        renderSubstring(substr.substring(0, splitIndex), substringComponentKey)
      );
      // add all following substrings and mention components as children of the caret component
      components = [
        renderSubstring(substr.substring(splitIndex), substringComponentKey)
      ];
    } else {
      components.push(renderSubstring(substr, substringComponentKey));
    }

    substringComponentKey++;
  };

  const mentionIteratee = (
    _,
    __,
    ___,
    id,
    display,
    mentionChildIndex,
    ____
  ) => {
    const key = _generateComponentKey(componentKeys, id);
    components.push(
      getMentionComponentForMatch(id, display, mentionChildIndex, key)
    );
  };

  const renderSubstring = (string: string, key: string | number) => {
    // set substring span to hidden, so that Emojis are not shown double in Mobile Safari
    return (
      <span {...style('substring')} key={key}>
        {string}
      </span>
    );
  };

  const getMentionComponentForMatch = (
    id: string,
    display: string,
    mentionChildIndex: number,
    key: any
  ) => {
    const props = { id, display, key };
    const child = React.Children.toArray(children)[mentionChildIndex];
    return React.cloneElement(child as React.ReactElement, props);
  };

  const renderHighlighterCaret = (children: React.ReactNode) => {
    return (
      <span {...style('caret')} ref={setCaretElement} key="caret">
        {children}
      </span>
    );
  };

  iterateMentionsMarkup(value, config, mentionIteratee, textIteratee);

  // append a span containing a space, to ensure the last text line has the correct height
  components.push(' ');

  if (components !== resultComponents) {
    // if a caret component is to be rendered, add all components that followed as its children
    resultComponents.push(renderHighlighterCaret(components));
  }

  return (
    <div {...style} ref={containerRef}>
      {resultComponents}
    </div>
  );
}

const styled = defaultStyle(
  {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    color: 'transparent',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    border: '1px solid transparent',
    textAlign: 'start',

    '&singleLine': {
      whiteSpace: 'pre',
      wordWrap: null
    },

    substring: {
      visibility: 'hidden'
    }
  },
  (props) => ({
    '&singleLine': props.singleLine
  })
);

export default styled(Highlighter);
