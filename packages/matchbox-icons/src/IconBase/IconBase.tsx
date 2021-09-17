import React from 'react';

export type IconBaseProps = React.ComponentPropsWithoutRef<'svg'> & {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  size?: number | string;
  label?: string;
  viewBox?: string;
  text?: string;
  textFill?: string;
  textProps?: React.ComponentPropsWithoutRef<'text'>;
};

const IconBase = (props: IconBaseProps): JSX.Element => {
  const {
    children,
    width,
    height,
    size = 18,
    style,
    viewBox = '0 0 24 24',
    label,
    ...rest
  } = props;

  const styleProp = {
    verticalAlign: 'middle',
    ...style,
  };

  return (
    <svg
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      viewBox={viewBox}
      width={width || size}
      height={height || size}
      aria-label={label}
      role={label && 'img'}
      aria-hidden={label ? 'false' : 'true'}
      {...rest}
      style={styleProp}
    >
      {children}
    </svg>
  );
};

IconBase.displayName = 'IconBase';

export function createSvgIcon(path: JSX.Element, displayName: string): React.ElementType {
  const Icon = (props: IconBaseProps) => <IconBase {...props}>{path}</IconBase>;

  Icon.displayName = displayName;

  return Icon;
}

export function createExtendedSvgIcon({
  displayName,
  path,
  textContainer,
  viewBox,
}: {
  displayName: string;
  path: JSX.Element;
  textContainer?: {
    [k: string]: unknown;
  };
  viewBox?: string;
}): React.ElementType {
  const Icon = ({ text, textFill = 'white', textProps, ...props }: IconBaseProps) => (
    <IconBase viewBox={viewBox} {...props}>
      <g>
        {path}
        <text fill={textFill} {...textContainer} {...textProps}>
          {text}
        </text>
      </g>
    </IconBase>
  );

  Icon.displayName = displayName;

  return Icon;
}

export default IconBase;
