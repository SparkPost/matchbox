import React from 'react';
import { render } from 'test-utils';
import CodeBlock from '../CodeBlock';
import { tokens } from '@sparkpost/design-tokens';

const codeSnippet = `curl -X POST
https://api.sparkpost.com/api/v1/transmissions
-H "Authorization: api-key-here"
-H "Content-Type: application/json"
-d '{
  "options": {
    "sandbox": true
  },
  "content": {
    "from": "from@email.com",
    "subject": "Thundercats are GO!!!",
    "text": "Sword of Omens, give me sight BEYOND sight"
  },
  "recipients": [{ "address": "email address here" }]
}'`;

describe('CodeBlock', () => {
  const subject = (props) => render(<CodeBlock {...props} code={codeSnippet} />).container;

  it('renders the passed in code snippet', () => {
    const wrapper = subject();

    expect(wrapper.textContent).toContain(codeSnippet);
  });

  it('renders with appropriate semantic HTML elements', () => {
    const wrapper = subject();

    expect(wrapper.querySelectorAll('pre code')).toHaveLength(1);
  });

  it('renders with the light theme by default', () => {
    const wrapper = subject();

    expect(wrapper.firstChild).toHaveStyleRule('background-color', tokens.color_gray_100);
  });

  it('renders the dark theme when the "dark" prop is `true`', () => {
    const wrapper = subject({ dark: true });

    expect(wrapper.firstChild).toHaveStyleRule('background-color', tokens.color_gray_900);
  });

  it('renders line numbers when the "numbered" prop is `true`', () => {
    const wrapper = subject({ numbered: true });

    expect(wrapper).toHaveTextContent('1');
    expect(wrapper).toHaveTextContent('2');
    expect(wrapper).toHaveTextContent('3');
    expect(wrapper).toHaveTextContent('4');
    expect(wrapper).toHaveTextContent('5');
    expect(wrapper).toHaveTextContent('6');
    expect(wrapper).toHaveTextContent('7');
    expect(wrapper).toHaveTextContent('8');
    expect(wrapper).toHaveTextContent('9');
    expect(wrapper).toHaveTextContent('10');
    expect(wrapper).toHaveTextContent('11');
    expect(wrapper).toHaveTextContent('12');
    expect(wrapper).toHaveTextContent('13');
    expect(wrapper).toHaveTextContent('14');
    expect(wrapper).toHaveTextContent('15');
    expect(wrapper.querySelector('svg')).not.toBeInTheDocument();
  });

  it('renders chevron SVG illustrations when "numbered" is set to `false`', () => {
    const wrapper = subject({ numbered: false });

    expect(wrapper.querySelectorAll('svg')).toHaveLength(15);
  });

  it('renders height as "auto" when no "height" prop value is supplied', () => {
    const wrapper = subject();

    expect(wrapper.firstChild).toHaveAttributeValue('style', { height: 'auto' });
  });

  it('renders the passed in "height" prop value as pixels', () => {
    const wrapper = subject({ height: 123 });

    expect(wrapper.firstChild).toHaveAttributeValue('style', { height: '123px' });
  });

  it('renders with a passed in class passed in via the "className" prop', () => {
    const wrapper = subject({ className: 'foo' });

    expect(wrapper.querySelector('.foo')).toBeInTheDocument();
  });

  it('renders the passed in child component with the "code" prop as a child of that component', () => {
    const MyChild = ({ children }) => <h1>{children}</h1>;

    const wrapper = subject({ children: <MyChild /> });

    expect(wrapper.querySelector('h1').textContent).toContain(codeSnippet);
  });
});
