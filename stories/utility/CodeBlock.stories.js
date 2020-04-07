import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { CodeBlock, Panel } from '@sparkpost/matchbox';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

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

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer bg="white">
      <Panel sectioned>{storyFn()}</Panel>
    </StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Utility|Code Block',
};

export const Chevrons = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock code={codeSnippet} />
));

export const Numbers = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered code={codeSnippet} />
));

export const Height = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered height={150} code={codeSnippet} />
));

export const Dark = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered dark code={codeSnippet} />
));

export const SyntaxHighlightingDemo = withInfo({ propTables: [CodeBlock] })(() => (
  <CodeBlock numbered code={codeSnippet}>
    <SyntaxHighlighter
      PreTag={React.Fragment}
      CodeTag={React.Fragment}
      language="bash"
      style={docco}
    />
  </CodeBlock>
));
