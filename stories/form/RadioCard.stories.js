import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { RadioCard } from '@sparkpost/matchbox';

export default {
  title: 'Form|RadioCard',
};

export const HeavyWeight = withInfo()(() => <RadioCard id="id1" label="Check Me" weight="heavy" />);
export const LightWeight = withInfo()(() => <RadioCard id="id1" label="Check Me" weight="light" />);

export const DisabledRadio = withInfo()(() => (
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

export const LightVerticalGroup = withInfo()(() => (
  <RadioCard.Group label="Radio Card Group" weight="light">
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

export const HeavyCollapsingHorizontalGroup = withInfo()(() => (
  <RadioCard.Group
    collapseBelow="sm"
    label="Radio Card Group"
    orientation="horizontal"
    weight="heavy"
  >
    <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
      I am help text
    </RadioCard>
    <RadioCard id="id2" label="Check Me 2" name="group">
      I am help text
    </RadioCard>
  </RadioCard.Group>
));

export const GroupWithHiddenLabel = withInfo()(() => (
  <RadioCard.Group label="Radio Card Group" weight="light" labelHidden>
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

export const GroupWithOptionalLabel = withInfo()(() => (
  <RadioCard.Group label="Radio Card Group" weight="light" optional>
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

export const GroupWithSystemProps = withInfo()(() => (
  <RadioCard.Group label="Radio Card Group" weight="light" my="500" mx="700">
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
