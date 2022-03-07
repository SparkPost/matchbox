import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { CheckboxCard } from '@sparkpost/matchbox';

describe('CheckboxCard', () => {
  add('basic usage', () => <CheckboxCard id="id1" label="Check Me" />);

  add('disabled', () => (
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
  ));

  add('vertical', () => (
    <CheckboxCard.Group label="Radio Card Group">
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group">
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id3" label="Check Me 3" name="group">
        I am help text
      </CheckboxCard>
    </CheckboxCard.Group>
  ));

  add('grid', () => (
    <CheckboxCard.Group label="Radio Card Group" orientation="grid">
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group">
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id3" label="Check Me 3" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id4" label="Check Me 4" name="group">
        I am help text
      </CheckboxCard>
    </CheckboxCard.Group>
  ));

  add('collapsing horizontal', () => (
    <CheckboxCard.Group collapseBelow="sm" label="Radio Card Group" orientation="horizontal">
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group">
        I am help text
      </CheckboxCard>
    </CheckboxCard.Group>
  ));

  add('group with hidden label', () => (
    <CheckboxCard.Group label="Radio Card Group" labelHidden>
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group">
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id3" label="Check Me 3" name="group">
        I am help text
      </CheckboxCard>
    </CheckboxCard.Group>
  ));

  add('group with optional label', () => (
    <CheckboxCard.Group label="Radio Card Group" optional>
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group">
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id3" label="Check Me 3" name="group">
        I am help text
      </CheckboxCard>
    </CheckboxCard.Group>
  ));

  add('help text', () => (
    <CheckboxCard.Group label="Radio Card Group" helpText="Help Text">
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group">
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id3" label="Check Me 3" name="group">
        I am help text
      </CheckboxCard>
    </CheckboxCard.Group>
  ));

  add('works with system props', () => (
    <CheckboxCard.Group label="Radio Card Group" my="500" mx="700">
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked>
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group">
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id3" label="Check Me 3" name="group">
        I am help text
      </CheckboxCard>
    </CheckboxCard.Group>
  ));

  add('small variant', () => (
    <CheckboxCard.Group label="Radio Card Group" space="compact">
      <CheckboxCard id="id1" label="Check Me 1" name="group" defaultChecked size="small">
        I am help text
      </CheckboxCard>
      <CheckboxCard id="id2" label="Check Me 2" name="group" size="small"></CheckboxCard>
      <CheckboxCard id="id3" label="Check Me 3" name="group" size="small"></CheckboxCard>
    </CheckboxCard.Group>
  ));
});
