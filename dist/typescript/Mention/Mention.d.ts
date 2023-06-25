import React from 'react';
import useStyles from 'substyle';
import { MentionProps } from '../types';
export interface ExtendedProps {
    display: string;
}
export declare const Mention: {
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
