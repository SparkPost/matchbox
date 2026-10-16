import React from 'react';
import { render } from 'test-utils';
import Video from '../Video';

describe('Video Component', () => {
  const subject = (props) =>
    render(
      <Video
        {...props}
        // Muted videos throw a very cryptic React error in tests:
        // Error: Warning: unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.
        muted={false}
      >
        <Video.Source className="video" src="/video.webm" type="video/webm" />
      </Video>,
    ).container;

  it('renders a video correctly', () => {
    let wrapper = subject({});

    expect(wrapper.querySelector('.video')).toBeInTheDocument();
    expect(wrapper.querySelector('source').getAttribute('src')).toEqual('/video.webm');
  });

  it('renders with correct default props', () => {
    let wrapper = subject({});

    expect(wrapper.querySelector('video').autoplay).toBe(true);
    expect(wrapper.querySelector('video').loop).toBe(false);
    expect(wrapper.querySelector('video').controls).toBe(false);
  });

  it('accepts muted, autoPlay, loop and controls props', () => {
    let wrapper = subject({
      autoPlay: false,
      loop: true,
      muted: false,
      controls: true,
    });

    expect(wrapper.querySelector('video').autoplay).toBe(false);
    expect(wrapper.querySelector('video').loop).toBe(true);
    expect(wrapper.querySelector('video').muted).toBe(false);
    expect(wrapper.querySelector('video').controls).toBe(true);
  });

  it('renders a role correctly', () => {
    let wrapper = subject({ role: 'presentation' });
    expect(wrapper.querySelector('[role="presentation"]')).toBeInTheDocument();
  });

  it('renders system props', () => {
    let wrapper = subject({
      m: '200px',
      width: '200px',
    });

    expect(wrapper.querySelector('figure')).toHaveStyleRule('margin', '200px');
    expect(wrapper.querySelector('figure')).toHaveStyleRule('width', '200px');
  });
});
