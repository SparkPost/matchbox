import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function withPositioning(WrappedComponent) {
  class WithPositioning extends Component {
    state = {
      preferredPosition: {
        top: null,
        bottom: null,
        left: null,
        right: null
      }
    }

    componentDidMount() {
      this.handleMeasurement();
      window.addEventListener('resize', this.handleMeasurement);
      window.addEventListener('scroll', this.handleMeasurement);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleMeasurement);
      window.removeEventListener('scroll', this.handleMeasurement);
    }

    handleMeasurement = () => {
      const windowRect = getWindowRect();
      const componentRect = ReactDOM.findDOMNode(this.component).getBoundingClientRect();
      const topOffset = componentRect.top;
      const leftOffset = componentRect.left;
      const rightOffset = windowRect.width - componentRect.right;
      const bottomOffset = windowRect.height - componentRect.bottom;

      this.setState({
        preferredPosition: {
          bottom: bottomOffset >= topOffset,
          top: bottomOffset < topOffset,
          right: rightOffset >= leftOffset,
          left: rightOffset < leftOffset
        }
      });
    }

    render() {
      return (
        <WrappedComponent
          ref={(node) => this.component = node}
          preferredPosition={this.state.preferredPosition}
          {...this.props}
        />
      );
    }
  }

  WithPositioning.displayName = `WithPositioning(${getDisplayName(WrappedComponent)})`;
  return WithPositioning;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function getWindowRect() {
  return {
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: window.innerWidth
  };
}

export default withPositioning;
