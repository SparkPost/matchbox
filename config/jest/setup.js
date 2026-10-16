/* eslint-disable no-console */
import { format } from 'util';
import './raf';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as matchers from './matchers';

expect.extend(matchers);

/**
 * Warnings from dependencies that matchbox cannot fix. react-scrolllock's LockToggle declares
 * defaultProps, which React 18.3 warns about and React 19 ignores; matchbox passes every prop it
 * relies on explicitly.
 * @type {ReadonlyArray<RegExp>}
 */
const IGNORED_WARNINGS = [/Support for defaultProps will be removed.*LockToggle/s];

/**
 * Fails the test on any React warning that is not in IGNORED_WARNINGS.
 * @param {...unknown} args console.error arguments, a format string and its substitutions
 * @returns {void}
 * @throws {Error} the formatted warning
 * @private
 */
function failOnWarning(...args) {
  const message = format(...args);
  if (IGNORED_WARNINGS.some((pattern) => pattern.test(message))) {
    return;
  }
  throw new Error(message);
}

console.error = failOnWarning;

beforeEach(() => {
  // Verifies that at least one assertion is called during a test
  // See https://facebook.github.io/jest/docs/en/expect.html#expecthasassertions
  expect.hasAssertions();
});
