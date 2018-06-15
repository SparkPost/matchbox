import { debounce } from '../event';

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
