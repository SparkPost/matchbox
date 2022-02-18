import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { RadioCard } from '@sparkpost/matchbox';

describe('RadioCard', () => {
  add('basic usage', () => (
    <RadioCard id="id1" label="Check Me" data-track="true" weight="light" />
  ));

  add('disabled', () => (
    <RadioCard.Group label="Radio Card Group">
      <RadioCard id="id1" label="Check Me 1" disabled>
        This one is disabled
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" disabled defaultChecked>
        This one is disabled
      </RadioCard>
      <RadioCard id="id3" label="Check Me 3">
        This one is not disabled
      </RadioCard>
    </RadioCard.Group>
  ));

  add('vertical', () => (
    <RadioCard.Group label="Radio Card Group">
      <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" name="group">
        I am help text
      </RadioCard>
      <RadioCard id="id3" label="Check Me 3" name="group">
        I am help text
      </RadioCard>
    </RadioCard.Group>
  ));

  add('grid', () => (
    <RadioCard.Group label="Radio Card Group" orientation="grid">
      <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" name="group">
        I am help text
      </RadioCard>
      <RadioCard id="id3" label="Check Me 3" name="group" defaultChecked>
        I am help text
      </RadioCard>
      <RadioCard id="id4" label="Check Me 4" name="group">
        I am help text
      </RadioCard>
    </RadioCard.Group>
  ));

  add('collapsing horizontal', () => (
    <RadioCard.Group collapseBelow="sm" label="Radio Card Group" orientation="horizontal">
      <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" name="group">
        I am help text
      </RadioCard>
    </RadioCard.Group>
  ));

  add('group with hidden label', () => (
    <RadioCard.Group label="Radio Card Group" labelHidden>
      <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" name="group">
        I am help text
      </RadioCard>
      <RadioCard id="id3" label="Check Me 3" name="group">
        I am help text
      </RadioCard>
    </RadioCard.Group>
  ));

  add('group with optional label', () => (
    <RadioCard.Group label="Radio Card Group" optional>
      <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" name="group">
        I am help text
      </RadioCard>
      <RadioCard id="id3" label="Check Me 3" name="group">
        I am help text
      </RadioCard>
    </RadioCard.Group>
  ));

  add('works with system props', () => (
    <RadioCard.Group label="Radio Card Group" my="500" mx="700">
      <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" name="group">
        I am help text
      </RadioCard>
      <RadioCard id="id3" label="Check Me 3" name="group">
        I am help text
      </RadioCard>
    </RadioCard.Group>
  ));

  add('small variant', () => (
    <RadioCard.Group label="Radio Card Group" space="compact">
      <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked variant="small">
        I am help text
      </RadioCard>
      <RadioCard id="id2" label="Check Me 2" name="group" variant="small"></RadioCard>
      <RadioCard id="id3" label="Check Me 3" name="group" variant="small"></RadioCard>
    </RadioCard.Group>
  ));
});
