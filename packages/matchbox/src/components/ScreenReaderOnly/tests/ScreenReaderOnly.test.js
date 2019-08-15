import React from 'react';
import ScreenReaderOnly from '../ScreenReaderOnly';
import { shallow } from 'enzyme';

describe('ScreenReaderOnly', () => {
  it('Renders according to the snapshot', () => {
    const wrapper = shallow(<ScreenReaderOnly>I am screen reader only content.</ScreenReaderOnly>);

    expect(wrapper).toMatchSnapshot();
  });
});
