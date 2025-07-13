const { add, sub } = require('../math.js');


test('add 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('sub 2 - 1 = 1', () => {
  expect(sub(2, 1)).toBe(1);
});
