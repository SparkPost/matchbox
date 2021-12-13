import { tokens_next, meta } from '../';

it('should format a standard tokens correctly', () => {
  const token = meta.find(({ name }) => name === 'border-radius-200');
  expect(tokens_next[token.javascript]).toEqual(token.value);
  expect(token).toMatchSnapshot();
});

it('should format a nested map tokens correctly', () => {
  const token = meta.find(({ name }) => name === 'color-green-700');
  expect(tokens_next[token.javascript]).toEqual(token.value);
  expect(token.scss).toEqual('color(green,700)');
});

it('should format a font size token correctly', () => {
  const token = meta.find(({ name }) => name === 'font-size-500');
  expect(tokens_next[token.javascript]).toEqual(token.value);
  expect(token.value).toEqual('1.5rem');
  expect(token.pixel_value).toEqual('24px');
  expect(token.pixel_value_unitless).toEqual('24');
  expect(token.system).toEqual('500');
});

it('should format root font size correctly', () => {
  const token = meta.find(({ name }) => name === 'font-size-root');
  expect(tokens_next[token.javascript]).toEqual(token.value);
  expect(token.value).toEqual('16px');
});

it('should format consistently', () => {
  expect(tokens_next).toMatchSnapshot();
  expect(meta).toMatchSnapshot();
});
