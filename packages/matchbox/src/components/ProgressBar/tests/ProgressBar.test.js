import React from 'react';
import { render } from 'test-utils';
import ProgressBar from '../ProgressBar';
import cases from 'jest-in-case';

const styleCases = [
  {
    name: 'default progress bar',
    props: {
      completed: 80,
    },
    assert: [
      ['height', '0.75rem'],
      ['background-color', '#D9E0E6'],
    ],
  },
  {
    name: 'normal size',
    props: {
      completed: 80,
      size: 'normal',
    },
    assert: [['height', '0.75rem']],
  },
  {
    name: 'small size',
    props: {
      completed: 80,
      size: 'small',
    },
    assert: [['height', '0.25rem']],
  },
];

cases(
  'renders progress bar styles',
  ({ props, assert }) => {
    const wrapper = render(<ProgressBar {...props} />).container;

    if (!Array.isArray(assert[0])) {
      expect(wrapper.firstChild).toHaveStyleRule(assert[0], assert[1]);
    } else {
      for (const assertion of assert) {
        expect(wrapper.firstChild).toHaveStyleRule(assertion[0], assertion[1]);
      }
    }
  },
  styleCases,
);

describe('renders progress bar inner styles', () => {
  const progressBar = (props) => render(<ProgressBar {...props} />).container;

  it('Has relevant WAI-ARIA attributes', () => {
    const wrapper = progressBar({ label: 'this is a test progress bar', completed: 10 });
    expect(wrapper.querySelector('[role="progressbar"]')).toBeInTheDocument();
    expect(wrapper.querySelector('[aria-valuenow]')).toBeInTheDocument();
    expect(wrapper.querySelector('[aria-valuemin]')).toBeInTheDocument();
    expect(wrapper.querySelector('[aria-valuemax]')).toBeInTheDocument();
  });

  it('renders progress bar width based on completed percent', () => {
    const wrapper = progressBar({ completed: 24 });
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('width', '24%');
    expect(wrapper.querySelectorAll('div')[0].getAttribute('aria-valuenow')).toEqual('24');
  });

  it('renders at 100% progress if given a value over 100', () => {
    const wrapper = progressBar({ completed: 110 });
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('width', '100%');
  });

  it('renders at 0% progress if given a negative value', () => {
    const wrapper = progressBar({ completed: -10 });
    expect(wrapper.querySelectorAll('div')[1]).toHaveStyleRule('width', '0%');
  });

  it('renders at custom value text', () => {
    const wrapper = progressBar({ valueText: 'test', completed: 10 });
    expect(wrapper.querySelector('div').getAttribute('aria-valuetext')).toEqual('test');
  });

  it('renders a screen reader label', () => {
    const wrapper = progressBar({ label: 'test', completed: 10 });
    expect(wrapper.querySelector('div').getAttribute('aria-label')).toEqual('test');
  });
});
