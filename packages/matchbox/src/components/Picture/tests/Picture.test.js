import React from 'react';
import Picture from '../Picture';

describe('Picture Components', () => {
  const subject = props => global.mountStyled(<Picture {...props} />);

  it('renders a child image correctly', () => {
    let wrapper = subject({ children: <Picture.Image className="test" src="/test.jpg" /> });
    expect(wrapper.find('.test')).toExist();
    expect(wrapper.find('img').props().alt).toEqual('');
    expect(wrapper.find('img').props().src).toEqual('/test.jpg');
  });

  it('renders a child image with alt correctly', () => {
    let wrapper = subject({ children: <Picture.Image alt="test-alt" src="/test.jpg" /> });
    expect(wrapper.find('img').props().alt).toEqual('test-alt');
  });

  it('renders a role correctly', () => {
    let wrapper = subject({ role: 'presentation' });
    expect(wrapper.find('[role="presentation"]')).toExist();
  });

  it('renders as see through', () => {
    let wrapper = subject({ seeThrough: true });
    expect(wrapper.find('figure')).toHaveStyleRule('mix-blend-mode', 'multiply');
  });

  it('renders system props', () => {
    let wrapper = subject({ m: '500px', width: '100px' });
    expect(wrapper.find('figure')).toHaveStyleRule('margin', '500px');
    expect(wrapper.find('figure')).toHaveStyleRule('width', '100px');
  });
});
