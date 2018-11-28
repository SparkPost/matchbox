import React from 'react';
import { shallow } from 'enzyme';

import Page from '../Page';

describe('Page', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      title: 'Page Title',
      primaryAction: { content: 'Primary' }
    };

    wrapper = shallow(<Page {...props}><h1>Test Example</h1></Page>);
  });

  it('renders page with children', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders page with secondary actions', () => {
    wrapper.setProps({ secondaryActions: [{ content: 'secondary 1' }, { content: 'secondary 2' }]});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders page with breadcrumb', () => {
    wrapper.setProps({ breadcrumbAction: { content: 'Step 1' }});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Breadcrumb').dive()).toMatchSnapshot();
  });

  it('renders page with empty state', () => {
    wrapper.setProps({ empty: { show: true, content: 'Empty page' }});
    expect(wrapper).toMatchSnapshot();
  });

  it('renders w/o title', () => {
    wrapper.setProps({ title: null });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders title as a node', () => {
    wrapper.setProps({ title: <div>test</div> });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders subtitle string', () => {
    wrapper.setProps({ subtitle: 'sub' });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders subtitle node', () => {
    wrapper.setProps({ subtitle: <div>sub</div> });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders primary area node', () => {
    wrapper.setProps({ primaryArea: <div>primary</div> });
    expect(wrapper).toMatchSnapshot();
  });

});
