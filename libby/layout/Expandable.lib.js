import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Expandable, Panel } from '@sparkpost/matchbox';

function Slack() {
  return (
    <svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <path fill="#e01e5a" d="M23.33 62.14a9.67 9.67 0 1 1-9.67-9.67h9.67z" />
      <path fill="#e01e5a" d="M28.2 62.14a9.67 9.67 0 1 1 19.33 0v24.2a9.67 9.67 0 0 1-19.33 0z" />
      <path fill="#36c5f0" d="M37.86 23.33a9.67 9.67 0 1 1 9.67-9.67v9.67z" />
      <path fill="#36c5f0" d="M37.86 28.2a9.67 9.67 0 1 1 0 19.33h-24.2a9.67 9.67 0 0 1 0-19.33z" />
      <path fill="#2eb67d" d="M76.67 37.86a9.67 9.67 0 1 1 9.67 9.67h-9.67z" />
      <path fill="#2eb67d" d="M71.8 37.86a9.67 9.67 0 1 1-19.33 0v-24.2a9.67 9.67 0 0 1 19.33 0z" />
      <path fill="#ecb22e" d="M62.14 76.67a9.67 9.67 0 1 1-9.67 9.67v-9.67z" />
      <path fill="#ecb22e" d="M62.14 71.8a9.67 9.67 0 1 1 0-19.33h24.2a9.67 9.67 0 0 1 0 19.33z" />
    </svg>
  );
}

describe('Expandable', () => {
  add('icon and subtitle', () => (
    <Expandable
      defaultOpen={true}
      icon={<Slack />}
      title="Slack"
      id="example"
      subtitle="Integrate alerts into your team's Slack channels"
    >
      Content here
    </Expandable>
  ));

  add('controlled open state', () => {
    function ControlledExample({ title }) {
      const [open, setOpen] = React.useState(false);
      function onToggle() {
        setOpen(!open);
      }

      return (
        <Expandable open={open} title={title} onToggle={onToggle} id={title} mb={400}>
          Content {title} here
        </Expandable>
      );
    }

    return (
      <div>
        <Panel>
          <Panel.Section>
            <ControlledExample title="Foo" />
            <ControlledExample title="Bar" />
          </Panel.Section>
        </Panel>
        <ControlledExample title="Baz" />
      </div>
    );
  });

  add('borderless variant', () => (
    <Panel>
      <Panel.Section p="0">
        <Expandable variant="borderless" defaultOpen={true} title="Metrics" id="example">
          Content here
        </Expandable>
      </Panel.Section>
      <Panel.Section p="0">
        <Expandable variant="borderless" defaultOpen={false} title="Filters" id="example-2">
          Content here
        </Expandable>
      </Panel.Section>
      <Panel.Section p="0">
        <Expandable variant="borderless" defaultOpen={false} title="Comparisons" id="example-3">
          Content here
        </Expandable>
      </Panel.Section>
    </Panel>
  ));

  add('accents', () => (
    <Panel>
      <Panel.Section>
        <Expandable mb={400} title="Orange" id="orange" accent="orange">
          Content here
        </Expandable>
        <Expandable mb={400} title="Green" id="green" accent="green">
          Content here
        </Expandable>
        <Expandable mb={400} title="Yellow" id="yellow" accent="yellow">
          Content here
        </Expandable>
        <Expandable mb={400} title="Red" id="red" accent="red">
          Content here
        </Expandable>
        <Expandable mb={400} title="Gray" id="gray" accent="gray">
          Content here
        </Expandable>
        <Expandable mb={400} title="Blue" id="blue" accent="blue">
          Content here
        </Expandable>
      </Panel.Section>
    </Panel>
  ));
});
