import React from 'react';
import { describe, it } from '@sparkpost/libby-react';
import { Toggle } from '@sparkpost/matchbox';

describe('Toggle', () => {
  it('renders correctly', () => <Toggle id="id" data-id="toggle-input" />);
  it('renders disabled correctly', () => <Toggle id="id" data-id="toggle-input" disabled />);
  it('renders required correctly', () => <Toggle id="id" data-id="toggle-input" required />);
  it('works with system props', () => (
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
