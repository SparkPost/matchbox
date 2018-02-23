import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
import { WindowEvent } from '../WindowEvent';
import { getPositionFor } from '../../helpers/geometry';
import styles from './PopoverOverlay.module.scss';

class PopoverOverlay extends Component {
  static displayName = 'PopoverOverlay';

  static propTypes = {
    renderActivator: PropTypes.func.isRequired,
    renderPopover: PropTypes.func.isRequired,
    eventThrottle: PropTypes.number
  }

  state = {
    mounted: false,
    position: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    this.handleMeasurement();
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
      position: getPositionFor(this.activator)
    });
  }

  render() {
    const { renderPopover, renderActivator, portalId } = this.props;
    const { position } = this.state;

    const activatorProps = {
      activatorRef: (node) => this.activator = node
    };

    return (
      <Fragment>
        <WindowEvent event='resize' handler={this.handleMeasurement} />
        <WindowEvent event='scroll' handler={this.handleMeasurement} />
        { renderActivator(activatorProps) }
        <Portal containerId={portalId}>
          <div className={styles.PopoverOverlay} style={position}>
            { renderPopover() }
          </div>
        </Portal>
      </Fragment>
    );
  }
}

export default PopoverOverlay;
