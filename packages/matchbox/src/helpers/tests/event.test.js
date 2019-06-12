import { debounce, identity, isNotTouchEvent, noop } from '../event';

// TODO Move to test helpers
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('debounce', () => {
  it('should debounce', async() => {
    const handler = jest.fn();
    debounce(handler, 100)();
    expect(handler).toHaveBeenCalledTimes(0);
    await delay(500);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

describe('noop', () => {
  it('should return nothing', () => {
    expect(noop()).toBe(undefined);
  });
});

describe('identity', () => {
  it('should return first parameter', () => {
    expect(identity('a')).toEqual('a');
  });
});

describe('isNotTouchEvent', () => {
  it('should return true with multiple touche points', () => {
    expect(isNotTouchEvent({ touches: [1,1]})).toBe(true);
  });

  it('should return true if event type is touchend', () => {
    expect(isNotTouchEvent({ type: 'touchend', touches: [1,1]})).toBe(true);
  });

  it('should return false with one touch', () => {
    expect(isNotTouchEvent({ touches: [1], type: '' })).toBe(false);
  });

  it('should return false with a touch start or move', () => {
    expect(isNotTouchEvent({ touches: [1], type: 'touchstart' })).toBe(false);
    expect(isNotTouchEvent({ touches: [1], type: 'touchmove' })).toBe(false);
  });
});
