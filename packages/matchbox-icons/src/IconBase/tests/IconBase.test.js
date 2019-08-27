import React from 'react';
import IconBase, { createSvgIcon, createExtendedSvgIcon } from '../IconBase';
import { shallow } from 'enzyme';

describe('IconBase', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<IconBase><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></g></IconBase>);
  });

  it('renders children correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders size correctly', () => {
    wrapper.setProps({ size: 10 });
    expect(wrapper.instance().props.size).toEqual(10);

    wrapper.setProps({ size: null, width: 16, height: 15 });
    expect(wrapper.instance().props.width).toEqual(16);
    expect(wrapper.instance().props.height).toEqual(15);
  });

  it('renders an accessible label when the label prop has a value', () => {
    wrapper.setProps({ label: 'Hello, world' });

    expect(wrapper.instance().props.label).toEqual('Hello, world');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('createSvgIcon', () => {
  it('creates an Icon correctly', () => {
    const Icon = createSvgIcon(<path d="a path" />, 'TestIcon');
    expect(shallow(<Icon />)).toMatchSnapshot();
  });
});

describe('createExtendedSvgIcon', () => {
  it('creates an extended Icon correctly', () => {
    const Icon = createExtendedSvgIcon({
      path: <path d="a path"/>,
      displayName: 'TextIcon',
      viewBox: '0 0 100 100',
      textContainer: {
        x: '22',
        y: '62',
        fontSize: '24'
      }
    });
    expect(shallow(
      <Icon text='test text' textFill='white' textProps={{ stroke: 'black' }} />
    )).toMatchSnapshot();
  });
});
