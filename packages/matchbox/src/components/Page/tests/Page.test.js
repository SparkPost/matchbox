import React from 'react';
import 'jest-styled-components';

import Page from '../Page';

describe('Page', () => {
  const subject = props => global.mountStyled(<Page {...props}>page content</Page>);

  it('renders page with children', () => {
    const wrapper = subject();
    expect(wrapper.text()).toEqual('page content');
  });

  it('renders title', () => {
    const wrapper = subject({ title: 'test title' });
    expect(wrapper.find('h1').text()).toEqual('test title');
  });

  it('renders primary action', () => {
    const onClick = jest.fn();
    const wrapper = subject({ primaryAction: { content: 'test action', onClick } });
    expect(wrapper.find('button').text()).toEqual('test action');
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('renders breadcrumb action', () => {
    const to = 'testlink';
    const wrapper = subject({ breadcrumbAction: { content: 'benedict breadcrumbatch', to } });
    expect(wrapper.find('a').text()).toEqual('benedict breadcrumbatch');
    expect(wrapper.find('a')).toHaveAttributeValue('href', to);
  });

  it('renders secondary actions', () => {
    const wrapper = subject({
      secondaryActions: [{ content: 'secondary 1' }, { content: 'secondary 2' }],
    });
    expect(wrapper.find('button')).toHaveAttributeValue('aria-expanded', 'false');
    expect(wrapper.find('button').text()).toEqual('More Options');
    wrapper.find('button').simulate('click'); // Popovers not rendered unless open
    expect(
      wrapper
        .find('a')
        .at(0)
        .text(),
    ).toEqual('secondary 1');
    expect(wrapper.find('button')).toHaveAttributeValue('aria-expanded', 'true');
  });

  it('renders primary action with color', () => {
    const wrapper = subject({
      primaryAction: { content: 'test action', color: 'red' },
    });
    expect(wrapper.find('button')).toHaveStyleRule('background', 'red');
  });

  it('renders page with empty state', () => {
    const wrapper = subject({ empty: { show: true, content: 'Empty page' } });
    expect(wrapper.text()).toEqual('Empty page');
  });

  it('renders title as a React node', () => {
    const wrapper = subject({ title: <div data-test="test-id">test</div> });
    expect(wrapper.find('[data-test="test-id"]').text()).toEqual('test');
  });

  it('renders subtitle', () => {
    const wrapper = subject({ subtitle: 'subtitle test' });
    expect(wrapper.find('h2').text()).toEqual('subtitle test');
  });

  it('renders subtitle as a React node', () => {
    const wrapper = subject({ subtitle: <div data-test="test-id">test</div> });
    expect(wrapper.find('[data-test="test-id"]').text()).toEqual('test');
  });

  it('renders primaryArea as a React node', () => {
    const wrapper = subject({ primaryArea: <div data-test="test-id">test</div> });
    expect(wrapper.find('[data-test="test-id"]').text()).toEqual('test');
  });
});
