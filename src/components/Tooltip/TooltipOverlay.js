import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { debounce } from '../../helpers/debounce';
import { WindowEvent } from '../WindowEvent';
import styles from './TooltipOverlay.module.scss';

class TooltipOverlay extends Component {
  static displayName = 'TooltipOverlay';

  static propTypes = {
    activator: PropTypes.func.isRequired,
    overlay: PropTypes.func.isRequired
  }

  state = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    preferredDirection: {
      top: null,
      bottom: null,
      left: null,
      right: null
    }
  }

  componentDidMount() {
    this.handleMeasurement();
  }

  handleMeasurement = debounce(() => {
    const windowRect = getWindowRect();
    const activator = getRectForNode(this.activator);
    const topOffset = activator.top;
    const leftOffset = activator.left;
    const rightOffset = windowRect.width - activator.right;
    const bottomOffset = windowRect.height - activator.bottom;

    this.setState({
      preferredDirection: {
        bottom: bottomOffset >= topOffset,
        top: bottomOffset < topOffset,
        right: rightOffset >= leftOffset,
        left: rightOffset < leftOffset
      },
      top: activator.top + windowRect.top,
      left: activator.left + windowRect.left,
      width: activator.width,
      height: activator.height
    });
  }, 300)

  render() {
    const { overlay, activator } = this.props;
    const { top, left, width, height, preferredDirection } = this.state;

    const overlayPosition = { top, left, width, height };
    const overlayProps = { preferredDirection };
    const activatorProps = {
      activatorRef: (node) => this.activator = node
    };

    return (
      <Fragment>
        <WindowEvent event='resize' handler={this.handleMeasurement} />
        <WindowEvent event='scroll' handler={this.handleMeasurement} />
        { activator(activatorProps) }
        {
          ReactDOM.createPortal(
            <div className={styles.TooltipOverlay}
              style={overlayPosition}>
              { overlay(overlayProps) }
            </div>
          , document.body)
        }
      </Fragment>
    );
  }
}

function getWindowRect() {
  return {
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: window.innerWidth
  };
}

function getRectForNode(node) {
  const rect = ReactDOM.findDOMNode(node);

  if (!rect) {
    return getWindowRect();
  }

  return rect.getBoundingClientRect();
}

export default TooltipOverlay;
