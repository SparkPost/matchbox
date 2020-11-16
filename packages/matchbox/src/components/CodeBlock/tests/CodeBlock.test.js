import React from 'react';
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
  const subject = props => global.mountStyled(<CodeBlock {...props} code={codeSnippet} />);

  it('renders the passed in code snippet', () => {
    const wrapper = subject();

    expect(wrapper).toIncludeText(codeSnippet);
  });

  it('renders with appropriate semantic HTML elements', () => {
    const wrapper = subject();

    expect(wrapper.find('pre code')).toHaveLength(1);
  });

  it('renders with the light theme by default', () => {
    const wrapper = subject();

    expect(wrapper).toHaveStyleRule('background-color', tokens.color_gray_100);
  });

  it('renders the dark theme when the "dark" prop is `true`', () => {
    const wrapper = subject({ dark: true });

    expect(wrapper).toHaveStyleRule('background-color', tokens.color_gray_900);
  });

  it('renders line numbers when the "numbered" prop is `true`', () => {
    const wrapper = subject({ numbered: true });

    expect(wrapper).toIncludeText('1');
    expect(wrapper).toIncludeText('2');
    expect(wrapper).toIncludeText('3');
    expect(wrapper).toIncludeText('4');
    expect(wrapper).toIncludeText('5');
    expect(wrapper).toIncludeText('6');
    expect(wrapper).toIncludeText('7');
    expect(wrapper).toIncludeText('8');
    expect(wrapper).toIncludeText('9');
    expect(wrapper).toIncludeText('10');
    expect(wrapper).toIncludeText('11');
    expect(wrapper).toIncludeText('12');
    expect(wrapper).toIncludeText('13');
    expect(wrapper).toIncludeText('14');
    expect(wrapper).toIncludeText('15');
    expect(wrapper.find('svg')).not.toExist();
  });

  it('renders chevron SVG illustrations when "numbered" is set to `false`', () => {
    const wrapper = subject({ numbered: false });

    expect(wrapper.find('svg')).toHaveLength(15);
  });

  it('renders height as "auto" when no "height" prop value is supplied', () => {
    const wrapper = subject();

    expect(wrapper).toHaveAttributeValue('style', { height: 'auto' });
  });

  it('renders the passed in "height" prop value as pixels', () => {
    const wrapper = subject({ height: 123 });

    expect(wrapper).toHaveAttributeValue('style', { height: '123px' });
  });

  it('renders with a passed in class passed in via the "className" prop', () => {
    const wrapper = subject({ className: 'foo' });

    expect(wrapper.find('.foo')).toExist();
  });

  it('renders the passed in child component with the "code" prop as a child of that component', () => {
    const MyChild = ({ children }) => <h1>{children}</h1>;

    const wrapper = subject({ children: <MyChild /> });

    expect(wrapper.find('h1')).toIncludeText(codeSnippet);
  });
});
