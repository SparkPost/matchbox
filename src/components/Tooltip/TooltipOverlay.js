import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
import { debounce } from '../../helpers/debounce';
import { getWindowRect, getRectForNode } from '../../helpers/geometry';
import { WindowEvent } from '../WindowEvent';
import styles from './TooltipOverlay.module.scss';

class TooltipOverlay extends Component {
  static displayName = 'TooltipOverlay';

  static defaultProps = {
    eventDebounce: 300
  }

  static propTypes = {
    renderActivator: PropTypes.func.isRequired,
    renderTooltip: PropTypes.func.isRequired,
    eventDebounce: PropTypes.number
  }

  state = {
    mounted: false,
    position: {},
    preferredDirection: {
      top: null,
      bottom: null,
      left: null,
      right: null
    }
  }

  componentDidUpdate() {
    // Check if the activator has been mounted
    // then calculate measurements, undebounced
    if (!this.state.mounted && !Object.keys(getRectForNode(this.activator)).length) {
      this.handleMeasurement();
      this.setState({ mounted: true });
    }
  }

  handleMeasurement = () => {
    const windowRect = getWindowRect();
    const activator = getRectForNode(this.activator);

    const rightOffset = windowRect.width - activator.right;
    const bottomOffset = windowRect.height - activator.bottom;

    this.setState({
      preferredDirection: {
        bottom: bottomOffset >= activator.top,
        top: bottomOffset < activator.top,
        right: rightOffset >= activator.left,
        left: rightOffset < activator.left
      },
      position: {
        top: activator.top + windowRect.top,
        left: activator.left + windowRect.left,
        width: activator.width,
        height: activator.height
      }
    });
  }

  render() {
    const { renderTooltip, renderActivator, eventDebounce } = this.props;
    const { position, preferredDirection } = this.state;

    const tooltipProps = { preferredDirection };
    const activatorProps = {
      activatorRef: (node) => this.activator = node
    };

    return (
      <Fragment>
        <WindowEvent event='resize' handler={debounce(this.handleMeasurement, eventDebounce)} />
        <WindowEvent event='scroll' handler={debounce(this.handleMeasurement, eventDebounce)} />
        { renderActivator(activatorProps) }
        <Portal>
          <div className={styles.TooltipOverlay} style={position}>
            { renderTooltip(tooltipProps) }
          </div>
        </Portal>
      </Fragment>
    );
  }
}

export default TooltipOverlay;
