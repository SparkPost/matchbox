const path = require('path');

module.exports = {
  components: './.playroom/components',
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
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
              ],
              // plugins: [require.resolve('@babel/plugin-proposal-class-properties')]
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        '@sparkpost/matchbox-icons': path.resolve(__dirname, './packages/matchbox-icons/src'),
        '@sparkpost/matchbox': path.resolve(__dirname, './packages/matchbox/src'),
        '@sparkpost/design-tokens': path.resolve(__dirname, './packages/design-tokens'),
      },
    },
  }),
};
