import React from 'react';
import Button from '../Button';
import cases from 'jest-in-case';
import 'jest-styled-components';

describe('Button', () => {
  const styleCases = [
    {
      name: 'default button',
      props: {},
      assert: [
        ['height', '2.5rem'],
        ['color', '#ffffff'],
        ['background', '#39444d'],
      ],
    },
    { name: 'large size', props: { size: 'large' }, assert: ['height', '3.5rem'] },
    { name: 'disabled', props: { disabled: true }, assert: ['opacity', '0.6'] },
    { name: 'destructive', props: { destructive: true }, assert: ['background', '#d9363e'] },
    { name: 'flat', props: { flat: true }, assert: ['background', 'transparent'] },
    {
      name: 'flat with color',
      props: { flat: true, color: 'blue' },
      assert: [
        ['background', 'transparent'],
        ['color', '#1273e6'],
      ],
    },
    {
      name: 'flat with color and disabled',
      props: { flat: true, color: 'red', disabled: true },
      assert: [
        ['background', 'transparent'],
        ['color', '#d9363e'],
        ['opacity', '0.6'],
      ],
    },
    {
      name: 'outline enabled',
      props: { outline: true },
      assert: [
        ['border', '1px solid #39444d'],
        ['background', 'transparent'],
      ],
    },
    { name: 'fullWidth', props: { fullWidth: true }, assert: ['width', '100%'] },
    { name: 'system width', props: { width: 1 / 2 }, assert: ['width', '50%'] },
    {
      name: 'system margin',
      props: { mx: '400', mt: '500' },
      assert: [
        ['margin-left', '1rem'],
        ['margin-top', '1.5rem'],
      ],
    },
    {
      name: 'deprecated prop - primary',
      props: { primary: true },
      assert: ['background', '#1273e6'],
    },
  ];

  cases(
    'renders button styles',
    ({ props, assert }) => {
      const wrapper = global.mountStyled(<Button {...props}>Hola!</Button>);

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

  const attrCases = [
    { name: 'as button type', props: {}, assert: ['type', 'button'] },
    { name: 'as submit type', props: { submit: true }, assert: ['type', 'submit'] },
    {
      name: 'external button',
      props: { to: 'www.test.com', external: true },
      assert: [
        ['title', 'Opens in a new tab'],
        ['rel', 'noopener noreferrer'],
        ['target', '_blank'],
        ['href', 'www.test.com'],
      ],
    },
    {
      name: 'external button with title',
      props: { to: 'www.test.com', external: true, title: 'test-title' },
      assert: [['title', 'test-title']],
    },
    {
      name: 'to with component',
      props: { to: '/withcomp', component: () => <div /> },
      assert: ['href', null],
    },
  ];

  cases(
    'renders button attributes',
    ({ props, assert }) => {
      const wrapper = global.mountStyled(<Button {...props}>Hola!</Button>);

      if (!Array.isArray(assert[0])) {
        expect(wrapper).toHaveAttributeValue(assert[0], assert[1]);
      } else {
        for (const assertion of assert) {
          expect(wrapper).toHaveAttributeValue(assertion[0], assertion[1]);
        }
      }
    },
    attrCases,
  );
});

describe('wrappers', () => {
  it('should render a custom wrapper', () => {
    const wrapper = global.mountStyled(
      <Button to="/test" component="span">
        Hola!
      </Button>,
    );
    expect(wrapper.find('span')).toExist();
    expect(wrapper.find('span')).toHaveAttributeValue('to', '/test');
  });
});
