import { calculateWinner } from "./calculateWinner";

test("Test the calculateWinner function", () => {
  expect(calculateWinner(22)).toBe(78);
});
