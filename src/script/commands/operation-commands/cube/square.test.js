import { describe, expect, test } from "@jest/globals";

import { Cube } from "./cube";

describe("Cube", () => {
  const cube = new Cube();

  test("should 4 ^ 3 to equal 64", () => {
    expect(cube.calculate(4)).toBe(64);
  });
  test("should (-5) ^ 3 to equal -125", () => {
    expect(cube.calculate(-5)).toBe(-125);
  });
  test("should 0 ^ 3 to equal 0", () => {
    expect(cube.calculate(0)).toBe(0);
  });
  test("should 0.5 + 3 to equal 0.125", () => {
    expect(cube.calculate(0.5)).toBe(0.125);
  });
});