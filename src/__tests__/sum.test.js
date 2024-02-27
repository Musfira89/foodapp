import { subract, sum } from "../components/sum"

test('sum of 02 numbers', () => {
  expect (sum (2,3)).toBe(5);

});

test('subraction of 02 ', () => {
  expect (subract(5,3)).toBe(1);
})


