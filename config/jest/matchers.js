/**
 * Asserts that an element's attribute equals `expected`. For `style`, `expected` is an object of
 * declarations that must all appear in the inline style.
 * @param {Element | null} received
 * @param {string} attr
 * @param {string | Record<string, string>} expected
 * @returns {{ pass: boolean, message: () => string }}
 * @public
 */
export function toHaveAttributeValue(received, attr, expected) {
  const receivedValue = received ? received.getAttribute(attr) : undefined;

  let pass;

  if (attr === 'style') {
    const styleSpec = Object.keys(expected).map((prop) => `${prop}:\\s${expected[prop]};`);
    pass = new RegExp(styleSpec).test(receivedValue);
  } else {
    pass = receivedValue === expected;
  }

  return {
    pass,
    message: () =>
      `expected ${this.utils.printReceived(receivedValue)} to have value ${this.utils.printExpected(
        expected,
      )}`,
  };
}
