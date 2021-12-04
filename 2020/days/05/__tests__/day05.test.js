const day05 = require('../index');

describe('Day 05', () => {
  it(`Should return 906 as max and 519 for mine`, () => expect(day05()).toMatchObject({ min: 55, max: 906, total: 851, mine: 519 }));
  it('Should return 357 as max', () => expect(day05(['FBFBBFFRLR']).max).toBe(357));
  it('Should return 567 as max', () => expect(day05(['BFFFBBFRRR']).max).toBe(567));
  it('Should return 119 as max', () => expect(day05(['FFFBBBFRRR']).max).toBe(119));
  it('Should return 820 as max', () => expect(day05(['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']).max).toBe(820));
});
