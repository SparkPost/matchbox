import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryContainer from '../storyHelpers/StoryContainer';
import { CodeBlock, Panel } from '@sparkpost/matchbox';

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

storiesOf('Utility|Code Block', module)
  .addDecorator(getStory => <StoryContainer>{getStory()}</StoryContainer>)
  .add(
    'with chevrons',
    withInfo({ propTablesExclude: [Panel] })(() => (
      <Panel sectioned>
        <CodeBlock code={codeSnippet} />
      </Panel>
    )),
  )
  .add(
    'with numbers',
    withInfo({ propTablesExclude: [Panel] })(() => (
      <Panel sectioned>
        <CodeBlock numbered code={codeSnippet} />
      </Panel>
    )),
  )
  .add(
    'with height',
    withInfo({ propTablesExclude: [Panel] })(() => (
      <Panel sectioned>
        <CodeBlock numbered height={150} code={codeSnippet} />
      </Panel>
    )),
  )
  .add(
    'dark',
    withInfo({ propTablesExclude: [Panel] })(() => (
      <Panel sectioned>
        <CodeBlock numbered dark code={codeSnippet} />
      </Panel>
    )),
  );
