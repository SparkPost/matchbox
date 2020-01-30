import React from 'react';
import ProgressBar from '../ProgressBar';
import cases from 'jest-in-case';
import 'jest-styled-components';

const styleCases = [
  {
    name: 'default progress bar',
    props: {
      completed: 80,
    },
    assert: [
      ['height', '0.75rem'],
      ['background-color', '#d9e0e6'],
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
  {
    name: 'margins',
    props: {
      completed: 80,
      margin: 20,
    },
    assert: [
      ['height', '0.75rem'],
      ['margin-top', '20px'],
    ],
  },
];

cases(
  'renders progress bar styles',
  ({ props, assert }) => {
    const wrapper = global.mountStyled(<ProgressBar {...props} />);

    if (!Array.isArray(assert[0])) {
      expect(wrapper).toHaveStyleRule(assert[0], assert[1]);
    } else {
      for (const assertion of assert) {
        expect(wrapper).toHaveStyleRule(assertion[0], assertion[1]);
      }
    }
  },
  styleCases,
);

describe('renders progress bar inner styles', () => {
  const progressBar = props => global.mountStyled(<ProgressBar {...props} />);

  it('should render progress bar width based on completed percent', () => {
    const wrapper = progressBar({ completed: 24 });

    expect(wrapper.find('div').at(1)).toHaveStyleRule('width', '24%');
  });
});
