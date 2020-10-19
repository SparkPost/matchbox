import React from 'react';

import { Toggle } from '@sparkpost/matchbox';

export default {
  title: 'Action/Toggle',
};

export const BasicToggle = () => <Toggle id="id" data-id="toggle-input" />;

export const DisabledToggle = () => <Toggle id="id" data-id="toggle-input" disabled />;

export const RequiredToggle = () => <Toggle id="id" data-id="toggle-input" required />;

export const SystemProps = () => (
  <>
    <div>
      <Toggle mb={400} id="id" data-id="toggle-input" label="toggle-1" />
    </div>
    <div>
      <Toggle mb={800} id="id2" data-id="toggle-input-2" disabled checked={true} />
    </div>
  </>
);
