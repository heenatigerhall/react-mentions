export interface SuggestionOverlayProps {
  id: string;
  suggestions: any;
  a11ySuggestionsListLabel: any;
  focusIndex: number | string;
  position: any;
  left: string | number;
  right: string | number;
  top: string | number;
  scrollFocusedIntoView: any;
  isLoading: boolean;
  isOpened: boolean;
  onSelect?: (...args: any) => void;
  ignoreAccents: boolean;
  containerRef: any;
  children: any;
  style: any;
  customSuggestionsContainer: any;
  onMouseDown: any;
  onMouseEnter: any;
}
