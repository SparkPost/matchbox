import * as helpers from '../systemProps';

describe('omit', () => {
  it('should omit keys', () => {
    const props = {
      margin: '500',
      my: '700',
      className: 'test',
    };
    expect(helpers.omit(props, ['my', 'margin'])).toEqual({ className: 'test' });
  });
});
