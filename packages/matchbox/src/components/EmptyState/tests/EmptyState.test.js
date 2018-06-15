import React from 'react';
import EmptyState from '../EmptyState';
import { shallow } from 'enzyme';

describe('EmptyState', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      title: 'Not there yet!'
    };

    wrapper = shallow(<EmptyState {...props}><p>Nothing here yet!</p></EmptyState>);
  });


  it('renders with image', () => {
    wrapper.setProps({ image: jest.fn() });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without any actions', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with actions', () => {
    wrapper.setProps({
      primaryAction: { content: 'button', onClick: jest.fn() },
      secondaryAction: { content: 'secondary', onClick: jest.fn() }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with primary action', () => {
    wrapper.setProps({ primaryAction: { content: 'button', onClick: jest.fn() }});
    expect(wrapper).toMatchSnapshot();
  });

});
