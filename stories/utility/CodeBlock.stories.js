import React from 'react';

import { CodeBlock } from '@sparkpost/matchbox';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/styles/hljs';

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

export default {
  title: 'Utility/CodeBlock',
};

export const Chevrons = () => <CodeBlock code={codeSnippet} />;

export const Numbers = () => <CodeBlock numbered code={codeSnippet} />;

export const Height = () => <CodeBlock numbered height={150} code={codeSnippet} />;

export const Dark = () => <CodeBlock numbered dark code={codeSnippet} />;

// export const SyntaxHighlightingDemo = (() => (
//   <CodeBlock numbered code={codeSnippet}>
//     <SyntaxHighlighter
//       PreTag={React.Fragment}
//       CodeTag={React.Fragment}
//       language="bash"
//       style={docco}
//     />
//   </CodeBlock>
// ));
