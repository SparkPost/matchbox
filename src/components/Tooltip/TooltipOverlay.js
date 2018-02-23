import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
import { WindowEvent } from '../WindowEvent';
import { debounce } from '../../helpers/debounce';
import { getPositionFor, getPreferredDirectionFor } from '../../helpers/geometry';
import styles from './TooltipOverlay.module.scss';

class TooltipOverlay extends Component {
  static displayName = 'TooltipOverlay';

  static defaultProps = {
    eventDebounce: 400
  }

  static propTypes = {
    renderActivator: PropTypes.func.isRequired,
    renderTooltip: PropTypes.func.isRequired,
    eventDebounce: PropTypes.number
  }

  state = {
    mounted: false,
    position: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    },
    preferredDirection: {
      top: null,
      bottom: null,
      left: null,
      right: null
    }
  }

  componentDidUpdate() {
    // Check if the activator ref exists
    // then calculate measurements, un-debounced
    if (!this.state.mounted && this.activator) {
      this.handleMeasurement();
      this.setState({ mounted: true });
    }
  }

  handleMeasurement = () => {
    this.setState({
      preferredDirection: getPreferredDirectionFor(this.activator),
      position: getPositionFor(this.activator)
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
