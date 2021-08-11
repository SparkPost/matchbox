import React from 'react';
interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    size?: number | string;
    style?: React.CSSProperties;
    label?: string;
    viewBox?: string;
    text?: string;
    textFill?: string;
    textProps?: React.SVGProps<SVGTextElement>;
}
declare const IconBase: React.FC<IconBaseProps>;
export declare function createSvgIcon(path: JSX.Element, displayName: string): {
    (props: IconBaseProps): JSX.Element;
    displayName: string;
};
export declare function createExtendedSvgIcon({ displayName, path, textContainer, viewBox, }: {
    displayName: string;
    path: JSX.Element;
    textContainer?: object;
    viewBox?: string;
}): {
    ({ text, textFill, textProps, ...props }: IconBaseProps): JSX.Element;
    displayName: string;
};
export default IconBase;
