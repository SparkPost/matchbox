import React from 'react';
import 'jest-styled-components';

import SectionTitle from '../SectionTitle';

describe('Layout', () => {
  const subject = () =>
    global.mountStyled(<SectionTitle data-id="test-id">The Title</SectionTitle>);

  it('renders section title', () => {
    const wrapper = subject();

    expect(wrapper.text()).toEqual('The Title');
  });

  it('should render data-id', () => {
    const wrapper = subject();
    expect(wrapper.find('[data-id="test-id"]')).toExist();
  });
});
