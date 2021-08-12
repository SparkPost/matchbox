import React from 'react';
import PropTypes from 'prop-types';

interface IconBaseProps extends React.ComponentPropsWithoutRef<'svg'> {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  size?: number | string;
  label?: string;
  viewBox?: string;
  text?: string;
  textFill?: string;
  textProps?: React.ComponentPropsWithoutRef<'text'>;
}

const IconBase: React.FC<IconBaseProps> = props => {
  const { children, width, height, size, style, viewBox = '0 0 24 24', label, ...rest } = props;

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

IconBase.defaultProps = {
  size: 18,
};

IconBase.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  viewBox: PropTypes.string,
  /** FileType icon only */
  text: PropTypes.string,
  /** FileType icon only */
  textFill: PropTypes.string,
  /** FileType icon only */
  textProps: PropTypes.object,
};

export function createSvgIcon(path: JSX.Element, displayName: string) {
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
  textContainer?: object;
  viewBox?: string;
}) {
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
