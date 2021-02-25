/* eslint-disable no-unused-vars, no-console */
import './raf';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as matchers from './matchers';
import 'jest-styled-components';

// Provides enzyme assertions.
// See https://github.com/blainekasten/enzyme-matchers#assertions
import 'jest-enzyme';

// Register custom matchers
expect.extend(matchers);
Enzyme.configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};

beforeEach(() => {
  // Verifies that at least one assertion is called during a test
  // See https://facebook.github.io/jest/docs/en/expect.html#expecthasassertions
  expect.hasAssertions();
});
