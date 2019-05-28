import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getRectFor, lerp } from '../../helpers/geometry';
import { noop, isNotTouchEvent } from '../../helpers/event';
import { onKey, onKeys } from '../../helpers/keyEvents';
import { roundToPlaces, trim } from '../../helpers/math';
import styles from './Slider.module.scss';

function Slider(props) {
  const { defaultValue, disabled, max, min, onChange, precision, value } = props;

  const [sliderValue, setSliderValue] = React.useState(value || defaultValue || 0);
  const [pixelOffset, setPixelOffset] = React.useState(0);
  const [moving, setMoving] = React.useState();

  const sliderRef = React.useRef();

  // Sets internal value when this is a controlled component
  React.useEffect(() => {
    if (value) {
      setSliderValue(value);
    }
  }, [value]);

  // Calculates pixel offset for handle and track when internal value changes
  React.useLayoutEffect(() => {
    const rect = getRectFor(sliderRef.current);
    const trimmedValue = trim(sliderValue, min, max);
    const absolutePercentage = (trimmedValue + Math.abs(min)) / Math.abs(min - max);
    setPixelOffset(lerp(0, rect.width, absolutePercentage));
    onChange && onChange(sliderValue);
  }, [sliderValue]);

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

  function handleEnd(e) {
    setMoving(null);
  }

  function handleKeyDown(e) {
    e.stopPropagation();
    e.preventDefault();

    // Calculates step increments based on precision
    let interval = 1;
    if (precision > 0) {
      interval = `0.${[...Array(precision - 1).keys()].reduce((acc) => `0${acc}`, '1')}`;
    }

    onKeys(['arrowLeft', 'arrowDown'], () => setValue(sliderValue - Number(interval)))(e);
    onKeys(['arrowRight', 'arrowUp'], () => setValue(sliderValue + Number(interval)))(e);
    onKey('home', () => setValue(min))(e);
    onKey('end', () => setValue(max))(e);
  }

  // Sets positions based on mouse position
  function setPositions(mousePosition) {
    const rect = getRectFor(sliderRef.current);
    const trimmedPixelOffset = trim(mousePosition - rect.left, 0, rect.width);
    const percentOffset = trimmedPixelOffset / rect.width;
    setValue(lerp(min, max, percentOffset));
  }

  // Sets value to a provided value
  function setValue(newValue) {
    const trimmedValue = trim(newValue, min, max);
    setSliderValue(roundToPlaces(trimmedValue, precision));
  }

  // Binding of mouse/touch drag events
  React.useEffect(() => {
    if (moving === 'mouse') {
      addEventListener('mousemove', handleMouseMove);
      addEventListener('mouseup', handleEnd);
    }

    if (moving === 'touch') {
      addEventListener('touchmove', handleTouchMove);
      addEventListener('touchend', handleEnd);
    }

    return (() => {
      if (moving === 'mouse') {
        removeEventListener('mousemove', handleMouseMove);
        removeEventListener('mouseUp', handleEnd);
      }

      if (moving === 'mouse') {
        removeEventListener('touchmove', handleTouchMove);
        removeEventListener('touchend', handleEnd);
      }
    });
  }, [moving]);

  const sliderClasses = classnames(
    styles.Slider,
    disabled && styles.Disabled
  );

  return (
    <div
      className={sliderClasses}
      onTouchStart={disabled ? noop : handleTouchStart}
      onMouseDown={disabled ? noop : handleMouseDown}
      ref={sliderRef}
    >
      <div className={styles.Rail} />
      <div
        className={styles.Track}
        style={{ width: pixelOffset }}
      />
      <div
        className={styles.Handle}
        role='slider'
        tabIndex='0'
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
        style={{ left: pixelOffset }}
        onKeyDown={disabled ? noop : handleKeyDown}
      />
    </div>
  );
}

Slider.defaultProps = {
  defaultValue: 0,
  min: 0,
  max: 100,
  precision: 0
};

Slider.propTypes = {
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  precision: PropTypes.number,
  value: PropTypes.number
};

export default Slider;
