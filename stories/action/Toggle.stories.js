import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Toggle } from '@sparkpost/matchbox';

export default {
  title: 'Action|Toggle',
};

export const BasicToggle = withInfo()(() => <Toggle id="id" data-id="toggle-input" />);

export const DisabledToggle = withInfo()(() => <Toggle id="id" data-id="toggle-input" disabled />);

export const RequiredToggle = withInfo()(() => <Toggle id="id" data-id="toggle-input" required />);

export const SystemProps = withInfo()(() => (
  <>
    <div>
      <Toggle mb={400} id="id" data-id="toggle-input" label="toggle-1" />
    </div>
    <div>
      <Toggle mb={800} id="id2" data-id="toggle-input-2" disabled checked={true} />
    </div>
  </>
));
