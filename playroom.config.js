module.exports = {
  components: '../.playroom/components',
  exampleCode: `
    <Stack>
      <Panel title="Hello there">
        <Panel.Section>
          <Text as="p">Welcome to playroom!</Text>
        </Panel.Section>
      </Panel>
    </Stack>
  `,
  frameComponent: './.playroom/frameComponent.js',
  openBrowser: true,
  outputPath: './playroom-build',
  port: 9000,
  snippets: './.playroom/snippets.js',
  title: 'Matchbox',
  widths: [448, 720, 960, 1200],
  // webpackConfig: () => ({
  //   // Custom webpack config goes here...
  // }),
};
