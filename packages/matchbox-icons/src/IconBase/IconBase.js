import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconBase extends Component {
  static displayName = 'IconBase';

  static defaultProps = {
    size: 18
  };

  static propTypes = {
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    label: PropTypes.string,
    viewBox: PropTypes.string,
    /** FileType icon only */
    text: PropTypes.string,
    /** FileType icon only */
    textFill: PropTypes.string,
    /** FileType icon only */
    textProps: PropTypes.object
  }

  render() {
    const {
      children,
      width,
      height,
      size,
      style = {},
      viewBox = '0 0 24 24',
      label,
      ...rest
    } = this.props;

    const styleProp = {
      verticalAlign: 'middle',
      ...style
    };

    return (
      <svg
        fill='currentColor'
        preserveAspectRatio='xMidYMid meet'
        viewBox={viewBox}
        width={width || size}
        height={height || size}
        aria-label={label}
        role={label && 'img'}
        aria-hidden={label ? 'false' : 'true'}
        {...rest}
        style={styleProp}>
        {children}
      </svg>
    );
  }
}

export function createSvgIcon(path, displayName) {
  const Icon = (props) => (
    <IconBase {...props}>{path}</IconBase>
  );

  Icon.displayName = displayName;

  return Icon;
}

export function createExtendedSvgIcon({
  displayName,
  path,
  text,
  textContainer,
  viewBox
}) {
  const Icon = ({
    text,
    textFill = 'white',
    textProps,
    ...props
  }) => (
    <IconBase viewBox={viewBox} {...props}>
      {path}
      <text fill={textFill} {...textContainer} {...textProps}>
        {text}
      </text>
    </IconBase>
  );

  Icon.displayName = displayName;

  return Icon;
}

export default IconBase;
