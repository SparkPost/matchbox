import * as helpers from '../noop';

describe('noop', () => {
  it('doesnt do anything', () => {
    expect(helpers.noop()).toBeUndefined();
  });
});
