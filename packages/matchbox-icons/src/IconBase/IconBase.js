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
    ])
  }

  render() {
    const {
      children,
      width,
      height,
      size,
      style = {},
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
        viewBox='0 0 24 24'
        width={width || size}
        height={height || size}
        {...rest}
        style={styleProp}>
          { children }
      </svg>
    );
  }
}

export function createSvgIcon(path, displayName) {
  const Icon = (props) => (
    <IconBase {...props}>{ path }</IconBase>
  );

  Icon.displayName = displayName;

  return Icon;
}

export default IconBase;
