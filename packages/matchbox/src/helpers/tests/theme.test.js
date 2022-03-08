import { getTheme } from '../theme';

const theme = {
  colors: {
    blue: {
      500: '#0000ff',
    },
  },
};

describe('Helper: Theme helpers', () => {
  describe('getTheme', () => {
    it('should get a theme value', () => {
      expect(getTheme('colors.blue.500')({ theme })).toBe('#0000ff');
    });

    it('should handle a missing value', () => {
      expect(getTheme('colors.green.500')({ theme })).toBe(undefined);
    });
  });
});
