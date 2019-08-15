import React from 'react';
import ScreenReaderOnly from '../ScreenReaderOnly';
import { shallow } from 'enzyme';

describe('ScreenReaderOnly', () => {
  it('Renders according to the snapshot', () => {
    const wrapper = shallow(<ScreenReaderOnly>I am screen reader only content.</ScreenReaderOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders the component using as a `<span></span>` to ensure it can be used in all situations (i.e., within other inline elements)', () => {
    const wrapper = shallow(<ScreenReaderOnly>I will surely render as a span!</ScreenReaderOnly>);

    expect(wrapper.find('span')).toHaveLength(1);
  });
});
