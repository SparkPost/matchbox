import React from 'react';
import Tooltip from '../Tooltip';
import { shallow } from 'enzyme';
import cases from 'jest-in-case';

describe('Tooltip', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Tooltip content='content test'>Hola!</Tooltip>);
  });

  const testCases = [
    { name: 'dark', props: { dark: true }},
    { name: 'top left and offset', props: { left: true, top: true, horizontalOffset: '10px' }},
    { name: 'with a width', props: { width: '100px' }}
  ];

  cases('renders tooltip states', (opts) => {
    wrapper.setProps(opts.props);
    expect(wrapper.instance().renderTooltip({ preferredDirection: {
      bottom: true,
      left: false,
      right: true,
      top: false
    }})).toMatchSnapshot();

    expect(wrapper.instance().renderActivator({ activatorRef: jest.fn() })).toMatchSnapshot();
  }, testCases);

  it('should handle mouse events', () => {
    wrapper.instance().handleMouseOver();
    expect(wrapper).toHaveState({ hover: true });
    wrapper.instance().handleMouseOut();
    expect(wrapper).toHaveState({ hover: false });
  });

  it('should render overlay', () => {
    wrapper.setProps({ portalId: 'foo', eventDebounce: 800 });
    expect(wrapper.find('TooltipOverlay').dive()).toMatchSnapshot();
  });
});
