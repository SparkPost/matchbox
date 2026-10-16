import React from 'react';
import { render, fireEvent } from 'test-utils';
import Page from '../Page';

describe('Page', () => {
  const subject = (props) => render(<Page {...props}>page content</Page>).container;

  it('renders page with children', () => {
    const wrapper = subject();
    expect(wrapper.textContent).toEqual('page content');
  });

  it('renders title', () => {
    const wrapper = subject({ title: 'test title' });
    expect(wrapper.querySelector('h1').textContent).toEqual('test title');
  });

  it('renders primary action', () => {
    const onClick = jest.fn();
    const wrapper = subject({ primaryAction: { content: 'test action', onClick } });
    expect(wrapper.querySelector('button').textContent).toEqual('test action');
    fireEvent.click(wrapper.querySelector('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('renders breadcrumb action', () => {
    const to = 'testlink';
    const wrapper = subject({ breadcrumbAction: { content: 'benedict breadcrumbatch', to } });
    expect(wrapper.querySelector('a').textContent).toEqual('benedict breadcrumbatch');
    expect(wrapper.querySelector('a')).toHaveAttributeValue('href', to);
  });

  it('renders secondary actions', () => {
    const wrapper = subject({
      secondaryActions: [{ content: 'secondary 1' }, { content: 'secondary 2' }],
    });
    expect(wrapper.querySelector('button')).toHaveAttributeValue('aria-expanded', 'false');
    expect(wrapper.querySelector('button').textContent).toEqual('More Options');
    fireEvent.click(wrapper.querySelector('button')); // Popovers not rendered unless open
    expect(document.querySelectorAll('a')[0].textContent).toEqual('secondary 1');
    expect(wrapper.querySelector('button')).toHaveAttributeValue('aria-expanded', 'true');
  });

  it('renders primary action with color', () => {
    const wrapper = subject({
      primaryAction: { content: 'test action', color: 'red' },
    });
    expect(wrapper.querySelector('button')).toHaveStyleRule('background', 'red');
  });

  it('renders page with empty state', () => {
    const wrapper = subject({ empty: { show: true, content: 'Empty page' } });
    expect(wrapper.textContent).toEqual('Empty page');
  });

  it('renders title as a React node', () => {
    const wrapper = subject({ title: <div data-test="test-id">test</div> });
    expect(wrapper.querySelector('[data-test="test-id"]').textContent).toEqual('test');
  });

  it('renders subtitle', () => {
    const wrapper = subject({ subtitle: 'subtitle test' });
    expect(wrapper.querySelector('h2').textContent).toEqual('subtitle test');
  });

  it('renders subtitle as a React node', () => {
    const wrapper = subject({ subtitle: <div data-test="test-id">test</div> });
    expect(wrapper.querySelector('[data-test="test-id"]').textContent).toEqual('test');
  });

  it('renders primaryArea as a React node', () => {
    const wrapper = subject({ primaryArea: <div data-test="test-id">test</div> });
    expect(wrapper.querySelector('[data-test="test-id"]').textContent).toEqual('test');
  });
});
