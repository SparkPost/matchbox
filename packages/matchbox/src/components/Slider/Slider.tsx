import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps, compose } from 'styled-system';
import { getRectFor, lerp } from '../../helpers/geometry';
import { noop, isNotTouchEvent } from '../../helpers/event';
import { onKey, onKeys } from '../../helpers/keyEvents';
import { roundToPlaces, clamp } from '../../helpers/math';
import { getWindow } from '../../helpers/window';
import { useResizeObserver } from '../../hooks';
import {
  slider,
  rail,
  railHover,
  track,
  tick,
  tickLabel,
  tickLabelPosition,
  handle,
  handleShadow,
} from './styles';
import { pick } from '@styled-system/props';

const system = compose(margin);

type SliderStyledProps = {
  $included?: boolean;
  $disabled?: boolean;
};

export const StyledSlider = styled('div')`
  ${slider}
  ${system}
`;

const StyledRail = styled('div')<SliderStyledProps>`
  ${rail}
  ${StyledSlider}:hover & {
    ${railHover}
  }
`;

const StyledTrack = styled('div')<SliderStyledProps>`
  ${track}
`;

const StyledTick = styled('div')<SliderStyledProps>`
  ${tick}
`;

const StyledTickLabel = styled('div')`
  ${tickLabel}
  ${tickLabelPosition}
`;

const StyledHandle = styled('div')<SliderStyledProps>`
  ${handle}
`;

const StyledHandleShadow = styled('div')<SliderStyledProps>`
  ${handleShadow}
`;

export type SliderProps = {
  id?: string;
  /**
   * The slider's initial value on first render
   */
  defaultValue?: number;
  /**
   * Disables focus, key down, mouse and touch events
   */
  disabled?: boolean;
  /**
   * The slider's lower bounds
   */
  min?: number;
  /**
   * The slider's upper bounds
   */
  max?: number;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onChange?: (value: number) => void;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  /**
   * The number of decimal places to round values to
   */
  precision?: number;

  /**
   * Generates tick marks
   */
  ticks?: { [k: number]: React.ReactNode };
  /**
   * A value to programatically control the slider
   */
  value?: number;
  /**
   * Describes a side-effect relationship with another DOM element
   */
  'aria-controls'?: string;
  'aria-labelledby'?: string;
  /**
   * Identifier passed to the handle for testing or tracking purposes
   */
  'data-id'?: string;
  /**
   * System props for margin
   */
} & MarginProps;

function Slider(props: SliderProps): JSX.Element {
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

  const systemProps = pick(rest);
  const environment = getWindow();

  const [resizeRef, { contentRect }] = useResizeObserver();
  const [sliderValue, setSliderValue] = React.useState(
    value || defaultValue != null ? defaultValue : min,
  );
  const [sliderLocation, setSliderLocation] = React.useState(0);
  const [rect, setRect] = React.useState({ width: 0, left: 0 });
  const [moving, setMoving] = React.useState('');
  const sliderRef = React.useRef();

  React.useEffect(() => {
    setRect(getRectFor(sliderRef.current));
  }, [contentRect, sliderRef.current]);

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
    if (!isNaN(value) && isFinite(value)) {
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

  // Updates tick locations when ticks or component size change
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
    // preventDefault here prevents the parent window
    // from scrolling when interacting with the slider

    onKeys(['arrowLeft', 'arrowDown'], () => {
      e.preventDefault();
      setValue(sliderValue - interval);
    })(e);

    onKeys(['arrowRight', 'arrowUp'], () => {
      e.preventDefault();
      setValue(sliderValue + interval);
    })(e);

    onKey('home', () => {
      e.preventDefault();
      setValue(min);
    })(e);

    onKey('end', () => {
      e.preventDefault();
      setValue(max);
    })(e);
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
      environment.addEventListener('mousemove', handleMouseMove);
      environment.addEventListener('mouseup', handleEnd);
    }

    if (moving === 'touch') {
      environment.addEventListener('touchmove', handleTouchMove);
      environment.addEventListener('touchend', handleEnd);
    }

    return () => {
      if (moving === 'mouse') {
        environment.removeEventListener('mousemove', handleMouseMove);
        environment.removeEventListener('mouseup', handleEnd);
      }

      if (moving === 'touch') {
        environment.removeEventListener('touchmove', handleTouchMove);
        environment.removeEventListener('touchend', handleEnd);
      }
    };
  }, [moving]);

  const tickMarkup = Object.keys(tickLocations).map((tick) => {
    const { label, position } = tickLocations[tick];

    return (
      <StyledTick
        key={tick}
        style={{ left: position }}
        $disabled={disabled}
        $included={Number(tick) < sliderValue}
      >
        <StyledTickLabel $x={tick}>{label}</StyledTickLabel>
      </StyledTick>
    );
  });

  const assignRefs = (node) => {
    if (sliderRef) {
      sliderRef.current = node;
    }
    if (resizeRef) {
      resizeRef(node);
    }
  };

  return (
    <StyledSlider
      hasTicks={ticks}
      disabled={disabled}
      data-id="slider-wrapper"
      onTouchStart={disabled ? noop : handleTouchStart}
      onMouseDown={disabled ? noop : handleMouseDown}
      ref={assignRefs}
      {...systemProps}
    >
      <StyledRail $disabled={disabled} />
      {tickMarkup}
      <StyledTrack $disabled={disabled} style={{ width: sliderLocation }} />
      <StyledHandle
        id={id}
        aria-controls={props['aria-controls']}
        aria-labelledby={props['aria-labelledby']}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={sliderValue}
        aria-disabled={disabled}
        data-id={props['data-id']}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={disabled ? noop : handleKeyDown}
        role="slider"
        $disabled={disabled}
        style={{ left: sliderLocation }}
        tabIndex={0}
      >
        <StyledHandleShadow $disabled={disabled} />
      </StyledHandle>
    </StyledSlider>
  );
}

Slider.displayName = 'Slider';

Slider.defaultProps = {
  min: 0,
  max: 100,
  precision: 0,
};

export default Slider;
