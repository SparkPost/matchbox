import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
import { WindowEvent } from '../WindowEvent';
import { debounce } from '../../helpers/event';
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

  componentDidMount() {
    this.handleMeasurement();
  }

  componentWillReceiveProps() {
    this.handleMeasurement();
  }

  handleMeasurement = () => {
    this.setState({
      preferredDirection: getPreferredDirectionFor(this.activator),
      position: getPositionFor(this.activator)
    });
  }

  render() {
    const { renderTooltip, renderActivator, eventDebounce, portalId } = this.props;
    const { position, preferredDirection } = this.state;

    const tooltipProps = { preferredDirection };
    const activatorProps = {
      activatorRef: (node) => this.activator = node
    };

    return (
      <Fragment>
        <WindowEvent event='resize' handler={debounce(this.handleMeasurement, eventDebounce)} />
        <WindowEvent event='scroll' handler={debounce(this.handleMeasurement, eventDebounce)} />
        {renderActivator(activatorProps)}
        <Portal containerId={portalId}>
          <div className={styles.TooltipOverlay} style={position}>
            {renderTooltip(tooltipProps)}
          </div>
        </Portal>
      </Fragment>
    );
  }
}

export default TooltipOverlay;
