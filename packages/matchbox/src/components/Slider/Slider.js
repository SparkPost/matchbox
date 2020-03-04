import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { getRectFor, lerp, useWindowSize } from '../../helpers/geometry';
import { noop, isNotTouchEvent } from '../../helpers/event';
import { onKey, onKeys } from '../../helpers/keyEvents';
import { roundToPlaces, clamp } from '../../helpers/math';
import { slider, rail, track, tick, tickLabel, handle, handleShadow } from './styles';

import { Box } from '../Box';

const system = compose(margin);

export const StyledSlider = styled('div')`
  ${slider}
  ${system}
`;

const StyledRail = styled('div')`
  ${rail}
`;

const StyledTrack = styled('div')`
  ${track}
`;

const StyledTick = styled('div')`
  ${tick}
`;

const StyledTickLabel = styled('div')`
  ${tickLabel}
`;

const StyledHandle = styled('div')`
  ${handle}
`;

const StyledHandleShadow = styled('div')`
  ${handleShadow}
`;

function Slider(props) {
  const {
    defaultValue,
    disabled,
    id,
    max,
    min,
    onBlur,
    onFocus,
    onChange,
    precision,
    ticks,
    value,
    ...rest
  } = props;

  const windowSize = useWindowSize(50);
  const [sliderValue, setSliderValue] = React.useState(
    value || defaultValue != null ? defaultValue : min,
  );
  const [sliderLocation, setSliderLocation] = React.useState(0);
  const [rect, setRect] = React.useState({});
  const [moving, setMoving] = React.useState();
  const sliderRef = React.useRef();

  React.useEffect(() => {
    setRect(getRectFor(sliderRef.current));
  }, [windowSize, sliderRef.current]);

  // Calculates step increments based on precision
  const interval = React.useMemo(() => {
    let interval = 1;
    if (precision > 0) {
      const zeros = '0'.repeat(precision - 1);
      interval = parseFloat(`0.${zeros}1`);
    }
    return interval;
  }, [precision]);

  // Sets internal value when value is controlled externally
  React.useEffect(() => {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
      setValue(value);
    }
  }, [value]);

  // Updates slider location when value changes
  React.useEffect(() => {
    if (rect.width) {
      const absoluteProportion = (sliderValue - min) / Math.abs(min - max);
      setSliderLocation(lerp(0, rect.width, absoluteProportion));
      if (onChange) {
        onChange(sliderValue);
      }
    }
  }, [sliderValue, rect.width]);

  // Updates tick locations when ticks or window size change
  const tickLocations = React.useMemo(() => {
    if (!ticks || !rect.width) {
      return {};
    }

    return Object.keys(ticks).reduce((acc, number) => {
      const absoluteProportion = (Number(number) - min) / Math.abs(min - max);
      return {
        ...acc,
        [number]: {
          position: lerp(0, rect.width, absoluteProportion),
          label: ticks[number],
        },
      };
    }, {});
  }, [ticks, rect.width]);

  // Event handlers
  function handleMouseDown(e) {
    if (e.button !== 0) {
      return;
    }
    const mousePosition = e.pageX;
    setPositions(mousePosition);
    setMoving('mouse');
  }

  function handleMouseMove(e) {
    const mousePosition = e.pageX;
    setPositions(mousePosition);
  }

  function handleTouchStart(e) {
    if (isNotTouchEvent(e)) {
      return;
    }
    const position = e.touches[0].pageX;
    setPositions(position);
    setMoving('touch');
  }

  function handleTouchMove(e) {
    if (isNotTouchEvent(e)) {
      return;
    }
    const position = e.touches[0].pageX;
    setPositions(position);
  }

  function handleEnd() {
    setMoving(null);
  }

  function handleKeyDown(e) {
    e.stopPropagation();
    e.preventDefault();

    onKeys(['arrowLeft', 'arrowDown'], () => setValue(sliderValue - interval))(e);
    onKeys(['arrowRight', 'arrowUp'], () => setValue(sliderValue + interval))(e);
    onKey('home', () => setValue(min))(e);
    onKey('end', () => setValue(max))(e);
  }

  // Sets slider value based on an x position
  function setPositions(xPosition) {
    const clampedPixelOffset = clamp(xPosition - rect.left, 0, rect.width);
    const percentOffset = clampedPixelOffset / rect.width;
    setValue(lerp(min, max, percentOffset));
  }

  // Sets value to a provided value
  function setValue(newValue) {
    const clampedValue = clamp(newValue, min, max);
    setSliderValue(roundToPlaces(clampedValue, precision));
  }

  // Binding of mouse/touch drag events
  React.useEffect(() => {
    if (moving === 'mouse') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
    }

    if (moving === 'touch') {
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      if (moving === 'mouse') {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleEnd);
      }

      if (moving === 'touch') {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleEnd);
      }
    };
  }, [moving]);

  const tickMarkup = Object.keys(tickLocations).map(tick => {
    const { label, position } = tickLocations[tick];
    return (
      <StyledTick
        key={tick}
        style={{ left: position }}
        disabled={disabled}
        included={tick < sliderValue}
      >
        <StyledTickLabel>{label}</StyledTickLabel>
      </StyledTick>
    );
  });

  return (
    <Box pb={400}>
      <StyledSlider
        disabled={disabled}
        data-id="slider-wrapper"
        onTouchStart={disabled ? noop : handleTouchStart}
        onMouseDown={disabled ? noop : handleMouseDown}
        ref={sliderRef}
        {...rest}
      >
        <StyledRail disabled={disabled} />
        {tickMarkup}
        <StyledTrack disabled={disabled} style={{ width: sliderLocation }} />
        <StyledHandle
          id={id}
          aria-controls={props['aria-controls']}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={sliderValue}
          aria-disabled={disabled}
          data-id={props['data-id']}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={disabled ? noop : handleKeyDown}
          role="slider"
          disabled={disabled}
          style={{ left: sliderLocation }}
          tabIndex="0"
        >
          <StyledHandleShadow disabled={disabled} />
        </StyledHandle>
      </StyledSlider>
    </Box>
  );
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  precision: 0,
};

Slider.propTypes = {
  /**
   * The slider's initial value on first render
   */
  defaultValue: PropTypes.number,
  /**
   * Disables focus, key down, mouse and touch events
   */
  disabled: PropTypes.bool,
  /**
   * The slider's lower bounds
   */
  min: PropTypes.number,
  /**
   * The slider's upper bounds
   */
  max: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  /**
   * The number of decimal places to round values to
   */
  precision: PropTypes.number,

  /**
   * Generates tick marks
   */
  ticks: PropTypes.objectOf(PropTypes.node),
  /**
   * A value to programatically control the slider
   */
  value: PropTypes.number,
  /**
   * Describes a side-effect relationship with another DOM element
   */
  'aria-controls': PropTypes.string,
  /**
   * Identifier passed to the handle for testing or tracking purposes
   */
  'data-id': PropTypes.string,
  /**
   * System props for margin
   */
  ...createPropTypes(margin.propNames),
};

export default Slider;
