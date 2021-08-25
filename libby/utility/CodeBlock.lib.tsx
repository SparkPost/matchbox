import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { CodeBlock } from '@sparkpost/matchbox';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('bash', bash);

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
  add('chevrons', () => <CodeBlock code={codeSnippet} />);
  add('numbers', () => <CodeBlock numbered code={codeSnippet} />);
  add('height', () => <CodeBlock numbered height={150} code={codeSnippet} />);
  add('dark', () => <CodeBlock numbered dark code={codeSnippet} />);
  add('with syntax highlighting', () => (
    <CodeBlock numbered code={codeSnippet}>
      <SyntaxHighlighter
        PreTag={React.Fragment}
        CodeTag={React.Fragment}
        language="bash"
        style={docco}
      />
    </CodeBlock>
  ));
});
