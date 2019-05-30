import * as helpers from '../math';

describe('roundToPlaces', () => {
  it('should round to provided decimal places', () => {
    expect(helpers.roundToPlaces(2.116, 2)).toBe(2.12);
  });
});


describe('clamp', () => {
  it('should clamp upper bounds', () => {
    expect(helpers.clamp(10, 0, 5)).toBe(5);
  });

  it('should clamp lower bounds', () => {
    expect(helpers.clamp(-10, 0, 5)).toBe(0);
  });

  it('should not clamp in between', () => {
    expect(helpers.clamp(2, 0, 5)).toBe(2);
  });
});
