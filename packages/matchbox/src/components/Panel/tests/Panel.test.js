import React from 'react';
import Panel from '../Panel';
import { shallow } from 'enzyme';

describe('Panel', () => {
  let wrapper;

  it('renders correctly', () => {
    wrapper = shallow(
      <Panel accent sectioned title='title' actions={[{ content: 'Action' }]}>
        Foo
      </Panel>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with sections', () => {
    wrapper = shallow(
      <Panel title='title'>
        <Panel.Section actions={[{ content: 'Action' }]}>Foo</Panel.Section>
        <Panel.Section>Bar</Panel.Section>
      </Panel>
    );
    expect(wrapper.find('Header').dive()).toMatchSnapshot();
    expect(wrapper.find(Panel.Section).at(0).dive()).toMatchSnapshot();
    expect(wrapper.find(Panel.Section).at(1).dive()).toMatchSnapshot();
  });

  it('renders correctly with footer', () => {
    expect(shallow(
      <div>
        <Panel accent='red' />
        <Panel.Footer left={<span>left</span>} right='right' />
      </div>
    ).find(Panel.Footer).dive()).toMatchSnapshot();
  });
});
