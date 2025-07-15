import { describe, expect, test } from "@jest/globals";

import { SquareRoot } from "./square-root";

describe("Square root", () => {
  const squareRoot = new SquareRoot();

  test("should 4 ^ 0.5 to equal 2", () => {
    expect(squareRoot.execute(4)).toBe(2);
  });
  test("should (-5) ^ 0.5 to throw Error", () => {
    expect(() => { squareRoot.execute(-5); }).toThrow("Can't take the root of a negative number.");
  });
  test("should 0 ^ 0.5 to equal 0", () => {
    expect(squareRoot.execute(0)).toBe(0);
  });
  test("should 0.16 ^ 0.5 to equal 0.4", () => {
    expect(squareRoot.execute(0.16)).toBe(0.4);
  });
});