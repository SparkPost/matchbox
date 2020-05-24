export default [
  {
    group: 'Button',
    name: 'Primary',
    code: `
      <Button color="blue">Primary</Button>
    `,
  },
  {
    group: 'Button',
    name: 'Neutral',
    code: `
      <Button color="default" outlineBorder>Neutral</Button>
    `,
  },
  {
    group: 'Button',
    name: 'Destructive',
    code: `
      <Button color="red">Destructive</Button>
    `,
  },
  {
    group: 'Button',
    name: 'Button Group',
    code: `
      <Button.Group>
        <Button outlineBorder>Button</Button>
        <Button outlineBorder>Button</Button>
        <Button outlineBorder>Button</Button>
      </Button.Group>
    `,
  },
  {
    group: 'Button',
    name: 'Inline Group',
    code: `
      <Inline>
        <Button color="blue">Primary</Button>
        <Button color="default" outlineBorder>Neutral</Button>
      </Inline>
    `,
  },
  {
    group: 'Checkbox',
    name: 'Group',
    code: `
      <Checkbox.Group label="Legend">
        <Checkbox label="Checkbox 1" checked />
        <Checkbox label="Checkbox 2" />
        <Checkbox label="Checkbox 3" />
      </Checkbox.Group>
    `,
  },
  {
    group: 'Panel',
    name: 'With actions',
    code: `
      <Panel title="Title" actions={[{ content: "Action", color:"blue" }]}>
        <Panel.Section>
          Content
        </Panel.Section>
      </Panel>
    `,
  },
  {
    group: 'Panel.Section',
    name: 'With action',
    code: `
      <Panel.Section actions={[{ content: "Action", color: "blue" }]}>
        Content
      </Panel.Section>
    `,
  },
  {
    group: 'Page',
    name: 'With all toppings',
    code: `
      <Page
        title="Title"
        subtitle="Subtitle"
        primaryAction={{ content: "Action" }}
        secondaryActions={[{ content: "Action" }, { content: "Action" }]}
        breadcrumbAction={{ content: "Back" }}
      >
        Content
      </Page>
    `,
  },
  {
    group: 'Popover',
    name: 'Kebab Menu',
    code: `
      <Popover
        trigger={
          <Button outline width="2rem" size="small">
            <Box as="span"><MoreHoriz /></Box>
          </Button>
        }
      >
        <ActionList actions={[{ content: "View Details"}, { content: "Delete" }]} />
      </Popover>
    `,
  },
  {
    group: 'Radio',
    name: 'Group',
    code: `
      <Radio.Group label="Legend">
        <Radio name="group" value="1" label="Radio 1" />
        <Radio name="group" value="2" label="Radio 2" />
        <Radio name="group" value="3" label="Radio 3" />
      </Radio.Group>
    `,
  },
  {
    group: 'Select',
    name: 'With options',
    code: `
      <Select options={['Option 1', 'Option 2']} />
    `,
  },
  {
    group: 'Slider',
    name: 'With ticks',
    code: `
      <Slider defaultValue={50} ticks={{ 0: 'Tick',  100: 'Tick'}}/>
    `,
  },
  {
    group: 'Table',
    name: 'Within a panel',
    code: `
      <Panel>
        <Table>
          <thead>
            <Table.Row>
              <Table.HeaderCell>Header 1</Table.HeaderCell>
              <Table.HeaderCell>Header 2</Table.HeaderCell>
              <Table.HeaderCell>Header 3</Table.HeaderCell>
            </Table.Row>
          </thead>
          <tbody>
            <Table.Row>
              <Table.Cell>Cell 1</Table.Cell>
              <Table.Cell>Cell 2</Table.Cell>
              <Table.Cell>Cell 3</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell 1</Table.Cell>
              <Table.Cell>Cell 2</Table.Cell>
              <Table.Cell>Cell 3</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell 1</Table.Cell>
              <Table.Cell>Cell 2</Table.Cell>
              <Table.Cell>Cell 3</Table.Cell>
            </Table.Row>
          </tbody>
        </Table>
      </Panel>
    `,
  },
  {
    group: 'Tabs',
    name: 'With 4 tabs',
    code: `
      <Tabs selected={0} tabs={[
        { content: 'Tab One' },
        { content: 'Tab Two' },
        { content: 'Tab Three' },
        { content: 'Tab Four' }
      ]}/>
    `,
  },
  {
    group: 'TextField',
    name: 'Basic TextField',
    code: `
      <TextField label="Label" placeholder='Type here' />
    `,
  },
  {
    group: 'TextField',
    name: 'With more toppings',
    code: `
      <TextField
        label="Label"
        placeholder='Type here'
        suffix={<Search/>}
        connectLeft={<Select outline options={['Last Hour']}/>}
        connectRight={<Button outline>Copy</Button>}
      />
    `,
  },
  {
    group: 'Tooltip',
    name: 'On a button',
    code: `
      <Tooltip content="Hello I am a tooltip ama">
        <Button outline>Hover or Focus Me</Button>
      </Tooltip>
    `,
  },
];
