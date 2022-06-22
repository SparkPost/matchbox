/**
 * @type {import('@sparkpost/libby-react').Config}
 */
export default {
  entries: () => require.context('./libby', true, /\.lib\.[tj]sx?$/),
  outputPath: 'libby-build',
  layout: 'libby/_layout.tsx',
  preview: 'libby/_preview.ts',
  openBrowser: true,
  port: 9001,
  title: 'Matchbox',
  webpack: () => {
    return {
      module: {
        rules: [
          {
            test: /\.scss$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
      resolve: {
        alias: {
          '@sparkpost/matchbox-icons': '/packages/matchbox-icons/src',
          '@sparkpost/matchbox': '/packages/matchbox/src',
          '@sparkpost/design-tokens': '/packages/design-tokens',
          '@sparkpost/matchbox-media': '/packages/matchbox-media',
          '@sparkpost/matchbox-css': '/packages/matchbox-css',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
      },
    };
  },
  backgrounds: ['#ffffff', '#ebf0f5', '#2c353d'],
};
