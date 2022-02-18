import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { RadioCard } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('RadioCard', () => (
    <>
      <RadioCard id="id1" label="Check Me" data-track="true" weight="light" />
      {/* Disabled */}
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
      {/* Vertical */}
      <RadioCard.Group label="Radio Card Group">
        <RadioCard id="id4" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </RadioCard>
        <RadioCard id="id5" label="Check Me 2" name="group">
          I am help text
        </RadioCard>
        <RadioCard id="id6" label="Check Me 3" name="group">
          I am help text
        </RadioCard>
      </RadioCard.Group>
      {/* Grid */}
      <RadioCard.Group label="Radio Card Group" orientation="grid">
        <RadioCard id="id7" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </RadioCard>
        <RadioCard id="id8" label="Check Me 2" name="group">
          I am help text
        </RadioCard>
        <RadioCard id="id9" label="Check Me 3" name="group" defaultChecked>
          I am help text
        </RadioCard>
        <RadioCard id="id10" label="Check Me 4" name="group">
          I am help text
        </RadioCard>
      </RadioCard.Group>
      {/* Group with hidden label */}
      <RadioCard.Group label="Radio Card Group" labelHidden>
        <RadioCard id="id11" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </RadioCard>
        <RadioCard id="id12" label="Check Me 2" name="group">
          I am help text
        </RadioCard>
        <RadioCard id="id13" label="Check Me 3" name="group">
          I am help text
        </RadioCard>
      </RadioCard.Group>
      {/* Group with optional label */}
      <RadioCard.Group label="Radio Card Group" optional>
        <RadioCard id="id14" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </RadioCard>
        <RadioCard id="id15" label="Check Me 2" name="group">
          I am help text
        </RadioCard>
        <RadioCard id="id16" label="Check Me 3" name="group">
          I am help text
        </RadioCard>
      </RadioCard.Group>
      {/* Collapsing horizontal */}
      <RadioCard.Group collapseBelow="sm" label="Radio Card Group" orientation="horizontal">
        <RadioCard id="id1" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </RadioCard>
        <RadioCard id="id2" label="Check Me 2" name="group">
          I am help text
        </RadioCard>
      </RadioCard.Group>
      {/* System props */}
      <RadioCard.Group label="Radio Card Group" my="500" mx="700">
        <RadioCard id="id17" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </RadioCard>
        <RadioCard id="id18" label="Check Me 2" name="group">
          I am help text
        </RadioCard>
        <RadioCard id="id19" label="Check Me 3" name="group">
          I am help text
        </RadioCard>
      </RadioCard.Group>

      {/* Small */}
      <RadioCard.Group label="Radio Card Group" space="compact">
        <RadioCard id="id20" label="Check Me 1" name="group-small" defaultChecked size="small">
          I am help text
        </RadioCard>
        <RadioCard id="id21" label="Check Me 2" name="group-small" size="small">
          I am help text
        </RadioCard>
        <RadioCard id="id23" label="Check Me 3" name="group-small" size="small"></RadioCard>
      </RadioCard.Group>
    </>
  ));
});
