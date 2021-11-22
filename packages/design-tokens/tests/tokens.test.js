import { tokens, meta } from '../';
import path from 'path';
import fs from 'fs';

it('should format a standard tokens correctly', () => {
  const token = meta.find(({ name }) => name === 'border-radius-200');
  expect(tokens[token.javascript]).toEqual(token.value);
  expect(token).toMatchSnapshot();
});

it('should format a nested map tokens correctly', () => {
  const token = meta.find(({ name }) => name === 'color-green-700');
  expect(tokens[token.javascript]).toEqual(token.value);
  expect(token.scss).toEqual('color(green, 700)');
});

it('should format a font size token correctly', () => {
  const token = meta.find(({ name }) => name === 'font-size-500');
  expect(tokens[token.javascript]).toEqual(token.value);
  expect(token.value).toEqual('1.5rem');
  expect(token.pixel_value).toEqual('24px');
  expect(token.pixel_value_unitless).toEqual('24');
  expect(token.system).toEqual('500');
});

it('should format root font size correctly', () => {
  const token = meta.find(({ name }) => name === 'font-size-root');
  expect(tokens[token.javascript]).toEqual(token.value);
  expect(token.value).toEqual('16px');
});

it('should format consistently', () => {
  expect(tokens).toMatchSnapshot();
  expect(meta).toMatchSnapshot();
});

// Non-JS File Snapshots

function readFile(file) {
  return fs.readFileSync(path.join(process.cwd(), `packages/design-tokens/dist/${file}`), 'utf-8');
}

it('should generate CSS', () => {
  const file = readFile('index.custom-properties.css');
  expect(file).toMatchSnapshot();
});

it('should generate SCSS', () => {
  const files = [
    'border-radius.map.scss',
    'border-width.map.scss',
    'box-shadow.map.scss',
    'font-family.map.scss',
    'font-size.map.scss',
    'font-weight.map.scss',
    'line-height.map.scss',
    'media-query.map.scss',
    'motion-duration.map.scss',
    'motion-ease.map.scss',
    'sizing.map.scss',
    'spacing.map.scss',
    'z-index.map.scss',
    'color.deep-map.scss',
  ];
  for (const file of files) {
    expect(readFile(file)).toMatchSnapshot();
  }
});
