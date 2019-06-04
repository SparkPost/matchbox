export function toHaveAttributeValue(received, attr, expected) {
  const recievedValue = received.getDOMNode().getAttribute(attr);
  let pass;

  if (attr === 'style') {
    const styleSpec = Object.keys(expected).map((prop) => `${prop}:\\s${expected[prop]};`);
    pass = new RegExp(styleSpec).test(recievedValue)
  } else {
    pass = recievedValue === expected;
  }

  return {
    pass,
    message: () =>
      `expected ${this.utils.printReceived(
        recievedValue
      )} to have value ${this.utils.printExpected(expected)}`
  };
}
