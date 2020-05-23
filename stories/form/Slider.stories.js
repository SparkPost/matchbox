import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import { Slider, TextField } from '@sparkpost/matchbox';

export default {
  title: 'Form|Slider',
};

export const BasicSlider = withInfo()(() => (
  <Slider aria-controls="test-id" data-id="slider-test" defaultValue={125} min={100} max={150} />
));

export const DisabledSlider = withInfo()(() => (
  <Slider data-id="slider-test" disabled value={75} />
));

export const SliderWithTicks = withInfo()(() => (
  <div>
    <Slider
      mb={400}
      value={75}
      ticks={{
        0: '0',
        50: '50',
        25: 'Recommended',
        100: '100',
      }}
    />
    <Slider
      disabled
      value={33}
      ticks={{
        50: '50',
        25: 'Recommended',
      }}
    />
  </div>
));

export const ValueControlledSlider = withInfo()(() => {
  const [value, setValue] = React.useState(50.1);

  return (
    <Fragment>
      <TextField value={value} onChange={e => setValue(e.target.value)} />
      <Slider
        precision={1}
        max={100}
        min={-100}
        value={Number(value)}
        onChange={value => setValue(value)}
      />
    </Fragment>
  );
});

export const SliderWithSystemProps = withInfo()(() => (
  <div>
    <Slider
      mb={400}
      mr={800}
      ml={800}
      value={75}
      ticks={{
        0: '0',
        50: '50',
        25: 'Recommended',
        100: '100',
      }}
    />
    <Slider
      mt={400}
      value={75}
      ticks={{
        0: '0',
        50: '50',
        25: 'Recommended',
        100: '100',
      }}
    />
  </div>
));
