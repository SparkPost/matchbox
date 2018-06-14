import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../Portal';
import { WindowEvent } from '../WindowEvent';
import { getPositionFor } from '../../helpers/geometry';
import classnames from 'classnames';

import styles from './PopoverOverlay.module.scss';
class PopoverOverlay extends Component {
  static displayName = 'PopoverOverlay';

  static propTypes = {
    renderActivator: PropTypes.func.isRequired,
    renderPopover: PropTypes.func.isRequired
  }

  state = {
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

  UNSAFE_componentWillReceiveProps() {
    this.handleMeasurement();
  }

  handleMeasurement = () => {
    this.setState({
      position: getPositionFor(this.activator, { fixed: this.props.fixed })
    });
  }

  render() {
    const { renderPopover, renderActivator, portalId, fixed, open } = this.props;
    const { position } = this.state;

    const activatorProps = {
      activatorRef: (node) => this.activator = node
    };

    const overlayClasses = classnames(styles.PopoverOverlay, fixed && styles.fixed);

    return (
      <Fragment>
        {open ? <WindowEvent event='resize' handler={this.handleMeasurement} /> : null}
        {(!fixed && open) ? <WindowEvent event='scroll' handler={this.handleMeasurement} /> : null}
        {renderActivator(activatorProps)}
        <Portal containerId={portalId}>
          <div className={overlayClasses} style={position}>
            {renderPopover({ activatorWidth: this.state.position.width })}
          </div>
        </Portal>
      </Fragment>
    );
  }
}

export default PopoverOverlay;
