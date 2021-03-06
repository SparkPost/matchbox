import * as helpers from '../props';

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

describe('pick', () => {
  it('should pick keys', () => {
    const props = {
      margin: '500',
      my: '700',
      className: 'test',
    };
    expect(helpers.pick(props, ['className'])).toEqual({ className: 'test' });
  });
});

describe('clean', () => {
  it('should clean props', () => {
    const shouldForward = helpers.clean('fail').shouldForwardProp;
    expect(shouldForward('fail', () => true)).toEqual(false);
    expect(shouldForward('pass', () => false)).toEqual(false);
    expect(shouldForward('pass', () => true)).toEqual(true);
    expect(shouldForward('fail', () => false)).toEqual(false);
  });
});
