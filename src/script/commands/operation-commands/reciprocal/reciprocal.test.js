import { describe, expect, test } from "@jest/globals";

import { Reciprocal } from "./reciprocal";

describe("Reciprocal", () => {
  const reciprocal = new Reciprocal();

  test("should 1 / 5 to equal 0.2", () => {
    expect(reciprocal.calculate(5)).toBe(0.2);
  });
  test("should 1 / 0.5 to equal 2", () => {
    expect(reciprocal.calculate(0.5)).toBe(2);
  });
  test("should 1 / 0 to throw Error", () => {
    expect(() => { reciprocal.calculate(0); }).toThrow("Can't divide by zero.");
  });
  test("should 1 / (-2) to equal -0.5", () => {
    expect(reciprocal.calculate(-2)).toBe(-0.5);
  });
});