import React from 'react';
import { render } from 'test-utils';
import Picture from '../Picture';

describe('Picture Components', () => {
  const subject = (props) => render(<Picture {...props} />).container;

  it('renders a child image correctly', () => {
    let wrapper = subject({ children: <Picture.Image className="test" src="/test.jpg" /> });
    expect(wrapper.querySelector('.test')).toBeInTheDocument();
    expect(wrapper.querySelector('img').getAttribute('alt')).toEqual('');
    expect(wrapper.querySelector('img').getAttribute('src')).toEqual('/test.jpg');
  });

  it('renders a child image with alt correctly', () => {
    let wrapper = subject({ children: <Picture.Image alt="test-alt" src="/test.jpg" /> });
    expect(wrapper.querySelector('img').getAttribute('alt')).toEqual('test-alt');
  });

  it('renders a role correctly', () => {
    let wrapper = subject({ role: 'presentation' });
    expect(wrapper.querySelector('[role="presentation"]')).toBeInTheDocument();
  });

  it('renders as see through', () => {
    let wrapper = subject({ seeThrough: true });
    expect(wrapper.querySelector('figure')).toHaveStyleRule('mix-blend-mode', 'multiply');
  });

  it('renders system props', () => {
    let wrapper = subject({ m: '500px', width: '100px' });
    expect(wrapper.querySelector('figure')).toHaveStyleRule('margin', '500px');
    expect(wrapper.querySelector('figure')).toHaveStyleRule('width', '100px');
  });
});
