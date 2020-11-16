import React from 'react';
import Video from '../Video';
import 'jest-styled-components';

describe('Video Component', () => {
  const subject = props =>
    global.mountStyled(
      <Video {...props}>
        <Video.Source className="video" src="/video.webm" type="video/webm" />
      </Video>,
    );

  it('renders a video correctly', () => {
    let wrapper = subject({});

    expect(wrapper.find('.video')).toExist();
    expect(wrapper.find('source').props().src).toEqual('/video.webm');
  });

  it('renders with correct default props', () => {
    let wrapper = subject({});

    expect(wrapper.find('video').props().autoPlay).toBe(true);
    expect(wrapper.find('video').props().loop).toBe(false);
    expect(wrapper.find('video').props().muted).toBe(true);
    expect(wrapper.find('video').props().controls).toBe(false);
  });

  it('accepts muted, autoPlay, loop and controls props', () => {
    let wrapper = subject({
      autoPlay: false,
      loop: true,
      muted: false,
      controls: true,
    });

    expect(wrapper.find('video').props().autoPlay).toBe(false);
    expect(wrapper.find('video').props().loop).toBe(true);
    expect(wrapper.find('video').props().muted).toBe(false);
    expect(wrapper.find('video').props().controls).toBe(true);
  });

  it('renders a role correctly', () => {
    let wrapper = subject({ role: 'presentation' });
    expect(wrapper.find('[role="presentation"]')).toExist();
  });

  it('renders system props', () => {
    let wrapper = subject({
      m: '200px',
      width: '200px',
    });

    expect(wrapper.find('figure')).toHaveStyleRule('margin', '200px');
    expect(wrapper.find('figure')).toHaveStyleRule('width', '200px');
  });
});
