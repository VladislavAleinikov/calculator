import { describe, expect, test } from "@jest/globals";

import { Square } from "./square";

describe("Square", () => {
  const square = new Square();

  test("should 4 ^ 2 to equal 16", () => {
    expect(square.calculate(4)).toBe(16);
  });
  test("should (-5) ^ 2 to equal 25", () => {
    expect(square.calculate(-5)).toBe(25);
  });
  test("should 0 ^ 2 to equal 0", () => {
    expect(square.calculate(0)).toBe(0);
  });
  test("should 0.5 + 2 to equal 0.25", () => {
    expect(square.calculate(0.5)).toBe(0.25);
  });
});