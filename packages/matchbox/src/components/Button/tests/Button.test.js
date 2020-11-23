import React from 'react';
import Button from '../Button';
import cases from 'jest-in-case';
import { Assessment } from '@sparkpost/matchbox-icons';

describe('Button', () => {
  const styleCases = [
    {
      name: 'default button',
      props: {},
      assert: [
        ['height', '2.5rem'],
        ['color', 'white'],
        ['background', 'gray'],
      ],
    },
    { name: 'large size', props: { size: 'large' }, assert: ['height', '3.5rem'] },
    { name: 'disabled', props: { disabled: true }, assert: ['opacity', '0.6'] },
    { name: 'destructive', props: { destructive: true }, assert: ['background', 'red'] },
    { name: 'flat', props: { flat: true }, assert: ['background', 'transparent'] },
    {
      name: 'flat with color',
      props: { flat: true, color: 'blue' },
      assert: [
        ['background', 'transparent'],
        ['color', 'blue'],
      ],
    },
    {
      name: 'flat with color and disabled',
      props: { flat: true, color: 'red', disabled: true },
      assert: [
        ['background', 'transparent'],
        ['color', 'red'],
        ['opacity', '0.6'],
      ],
    },
    {
      name: 'outline enabled',
      props: { outlineBorder: true },
      assert: [
        ['border', '1px solid gray'],
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
      assert: ['background', 'blue'],
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

it('renders with with a ref', () => {
  function Test() {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current.focus();
    }, []);
    return (
      <>
        <Button ref={ref}>test content</Button>
        not this
      </>
    );
  }
  global.mountStyled(<Test />);
  expect(document.activeElement.innerHTML.includes('test content')).toBe(true);
  expect(document.activeElement.innerHTML.includes('not this')).toBe(false);
});

describe('wrappers', () => {
  it('should render a custom wrapper', () => {
    const wrapper = global.mountStyled(
      <Button to="/test" component="span">
        Hola!
      </Button>,
    );
    expect(wrapper.find('span').first()).toExist();
    expect(wrapper.find('span').first()).toHaveAttributeValue('to', '/test');
  });
});

describe('Button.Icon', () => {
  it('should render correctly', () => {
    const wrapper = global.mountStyled(
      <Button to="/test" component="span">
        Hola!
        <Button.Icon as={Assessment} />
      </Button>,
    );
    expect(wrapper.find('svg')).toExist();
    expect(wrapper.find('Assessment')).toExist();
  });

  it('should renders label and size correctly', () => {
    const wrapper = global.mountStyled(
      <Button to="/test" component="span">
        Hola!
        <Button.Icon as={Assessment} label="test-label" size={24} />
      </Button>,
    );
    expect(wrapper.find('[aria-label="test-label"]')).toExist();
    expect(wrapper.find('[aria-label="test-label"]').props().width).toEqual(24);
    expect(wrapper.find('[aria-label="test-label"]').props().height).toEqual(24);
  });
});
