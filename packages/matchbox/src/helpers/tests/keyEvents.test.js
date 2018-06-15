import { onKeys } from '../keyEvents';

describe('onKeys', () => {
  it('should handle events', () => {
    const handler = jest.fn();
    onKeys(['escape', 'enter'], handler)({ key: 'Enter', shiftKey: false });
    expect(handler).toHaveBeenCalled();
  });

  it('should trigger escape or enter if shiftkey is pressed', () => {
    const handler = jest.fn();
    onKeys(['escape', 'enter'], handler)({ key: 'Enter', shiftKey: true });
    expect(handler).not.toHaveBeenCalled();
  });

  it('should trigger escape or enter if key does not match', () => {
    const handler = jest.fn();
    onKeys(['escape', 'enter'], handler)({ key: 'Delete', shiftKey: false });
    expect(handler).not.toHaveBeenCalled();
  });
});
