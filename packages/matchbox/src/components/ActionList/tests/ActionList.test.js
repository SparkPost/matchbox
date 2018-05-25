import React from 'react';
import ActionList from '../ActionList';
import { shallow } from 'enzyme';

describe('ActionList', () => {
  it('renders actions correctly', () => {
    const wrapper = shallow(
      <ActionList actions={[{ content: 'Action' }, { content: 'Action 2', selected: true }]} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Section').dive()).toMatchSnapshot();
  });

  it('renders sections correctly', () => {
    const wrapper = shallow(
      <ActionList
        sections={[
          [{ content: 'Sectioned1' }, { content: 'Sectioned2' }],
          [{ content: 'Sectioned3' }, { content: 'Sectioned4' }]
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders sections correctly using a group by key', () => {
    const wrapper = shallow(
      <ActionList
        actions={[
          { content: 'Sectioned1', section: 1 }, { content: 'Sectioned2', section: 1 },
          { content: 'Sectioned3', section: 2 }, { content: 'Sectioned4', section: 2 }
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders sections with actions and max height correctly', () => {
    const wrapper = shallow(
      <ActionList
        maxHeight={50}
        actions={[{ content: 'Action1' }, { content: 'Action2' }]}
        sections={[
          [{ content: 'Sectioned1' }, { content: 'Sectioned2' }],
          [{ content: 'Sectioned3' }, { content: 'Sectioned4' }]
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
