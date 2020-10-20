import React from 'react';
import { RadioCard } from '@sparkpost/matchbox';

export default {
  title: 'Form/RadioCard',
};

export const HeavyWeight = () => <RadioCard id="id1" label="Check Me" weight="heavy" />;
export const LightWeight = () => <RadioCard id="id1" label="Check Me" weight="light" />;

export const DisabledRadio = () => (
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
);

export const VerticalGroup = () => (
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
);

export const GridOrientationGroup = () => (
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
);

export const CollapsingHorizontalGroup = () => (
  <RadioCard.Group collapseBelow="sm" label="Radio Card Group" orientation="horizontal">
    <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
      I am help text
    </RadioCard>
    <RadioCard id="id2" label="Check Me 2" name="group">
      I am help text
    </RadioCard>
  </RadioCard.Group>
);

export const GroupWithHiddenLabel = () => (
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
);

export const GroupWithOptionalLabel = () => (
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
);

export const GroupWithSystemProps = () => (
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
);
