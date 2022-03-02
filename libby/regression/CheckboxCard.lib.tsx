import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { CheckboxCard } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('CheckboxCard', () => (
    <>
      <CheckboxCard id="id1" label="Check Me" data-track="true" />
      {/* Disabled */}
      <CheckboxCard.Group label="Radio Card Group">
        <CheckboxCard id="id1" label="Check Me 1" disabled>
          This one is disabled
        </CheckboxCard>
        <CheckboxCard id="id2" label="Check Me 2" disabled defaultChecked>
          This one is disabled
        </CheckboxCard>
        <CheckboxCard id="id3" label="Check Me 3">
          This one is not disabled
        </CheckboxCard>
      </CheckboxCard.Group>
      {/* Vertical */}
      <CheckboxCard.Group label="Radio Card Group">
        <CheckboxCard id="id4" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id5" label="Check Me 2" name="group">
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id6" label="Check Me 3" name="group">
          I am help text
        </CheckboxCard>
      </CheckboxCard.Group>
      {/* Grid */}
      <CheckboxCard.Group label="Radio Card Group" orientation="grid">
        <CheckboxCard id="id7" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id8" label="Check Me 2" name="group">
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id9" label="Check Me 3" name="group" defaultChecked>
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id10" label="Check Me 4" name="group">
          I am help text
        </CheckboxCard>
      </CheckboxCard.Group>
      {/* Group with hidden label */}
      <CheckboxCard.Group label="Radio Card Group" labelHidden>
        <CheckboxCard id="id11" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id12" label="Check Me 2" name="group">
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id13" label="Check Me 3" name="group">
          I am help text
        </CheckboxCard>
      </CheckboxCard.Group>
      {/* Group with optional label */}
      <CheckboxCard.Group label="Radio Card Group" optional>
        <CheckboxCard id="id14" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id15" label="Check Me 2" name="group">
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id16" label="Check Me 3" name="group">
          I am help text
        </CheckboxCard>
      </CheckboxCard.Group>
      {/* Collapsing horizontal */}
      <CheckboxCard.Group collapseBelow="sm" label="Radio Card Group" orientation="horizontal">
        <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id2" label="Check Me 2" name="group">
          I am help text
        </CheckboxCard>
      </CheckboxCard.Group>
      {/* System props */}
      <CheckboxCard.Group label="Radio Card Group" my="500" mx="700">
        <CheckboxCard id="id17" label="Check Me 1" name="group" defaultChecked>
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id18" label="Check Me 2" name="group">
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id19" label="Check Me 3" name="group">
          I am help text
        </CheckboxCard>
      </CheckboxCard.Group>

      {/* Small */}
      <CheckboxCard.Group label="Radio Card Group" space="compact">
        <CheckboxCard id="id20" label="Check Me 1" name="group-small" defaultChecked size="small">
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id21" label="Check Me 2" name="group-small" size="small">
          I am help text
        </CheckboxCard>
        <CheckboxCard id="id23" label="Check Me 3" name="group-small" size="small"></CheckboxCard>
      </CheckboxCard.Group>
    </>
  ));
});
