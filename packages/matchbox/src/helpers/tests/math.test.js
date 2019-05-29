import * as helpers from '../math';

describe('roundToPlaces', () => {
  it('should round to provided decimal places', () => {
    expect(helpers.roundToPlaces(2.116, 2)).toBe(2.12);
  });
});


describe('trim', () => {
  it('should trim upper bounds', () => {
    expect(helpers.trim(10, 0, 5)).toBe(5);
  });

  it('should trim lower bounds', () => {
    expect(helpers.trim(-10, 0, 5)).toBe(0);
  });

  it('should not trim in between', () => {
    expect(helpers.trim(2, 0, 5)).toBe(2);
  });
});
