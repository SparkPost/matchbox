/* eslint-disable no-unused-vars, no-console */
import './raf';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import * as matchers from './matchers'

// Provides enzyme assertions.
// See https://github.com/blainekasten/enzyme-matchers#assertions
import 'jest-enzyme';

// Register custom matchers
expect.extend(matchers);
Enzyme.configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};

beforeEach(() => {
  // Verifies that at least one assertion is called during a test
  // See https://facebook.github.io/jest/docs/en/expect.html#expecthasassertions
  expect.hasAssertions();
});
