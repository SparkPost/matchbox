import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Toggle } from '@sparkpost/matchbox';

describe('Toggle', () => {
  add('renders correctly', () => <Toggle id="id" data-id="toggle-input" />);
  add('disabled', () => <Toggle id="id" data-id="toggle-input" disabled />);
  add('required', () => <Toggle id="id" data-id="toggle-input" required />);
  add('system props', () => (
    <>
      <div>
        <Toggle mb={400} id="id" data-id="toggle-input" label="toggle-1" />
      </div>
      <div>
        <Toggle mb={800} id="id2" data-id="toggle-input-2" disabled checked={true} />
      </div>
    </>
  ));
});
