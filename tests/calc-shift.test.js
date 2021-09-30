const calcShift = require('../src/calc-shift');

test('4th on 10 10', () => {
  expect(
    calcShift(new Date(2021, 9, 10), 4)
  ).toBe('Night');
});

test('4th on 29 9', () => {
  expect(
    calcShift(new Date(2021, 8, 29), 4)
  ).toBe('Chill1');
});
