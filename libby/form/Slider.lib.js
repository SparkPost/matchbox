import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Slider, TextField } from '@sparkpost/matchbox';

describe('Slider', () => {
  add('basic usage', () => (
    <>
      <Slider
        aria-controls="test-id"
        data-id="slider-test"
        defaultValue={125}
        min={100}
        max={150}
      />
      <button>end focus test</button>
    </>
  ));

  add('disabled', () => <Slider data-id="slider-test" disabled value={75} />);

  add('with ticks', () => (
    <>
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
          0: '10 days',
          100: '100000 days',
        }}
      />
    </>
  ));

  add('value controlled', () => {
    const [value, setValue] = React.useState(50.1);

    return (
      <>
        <TextField value={value} onChange={e => setValue(e.target.value)} />
        <Slider
          precision={1}
          max={100}
          min={-100}
          value={Number(value)}
          onChange={value => setValue(value)}
        />
      </>
    );
  });

  add('with system props', () => (
    <>
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
    </>
  ));
});
