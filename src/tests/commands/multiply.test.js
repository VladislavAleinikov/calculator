import { describe, expect, test } from "@jest/globals";

import { Multiply } from "../../script/commands/operation-commands/multiply/multiply";

describe("Multiply", () => {
  const multiply = new Multiply();

  test("should 4 * 5 to equal 20", () => {
    expect(multiply.calculate(4, 5)).toBe(20);
  });
  test("should (-5) * 4 to equal -20", () => {
    expect(multiply.calculate(-5, 4)).toBe(-20);
  });
  test("should 5 * 0 to equal 0", () => {
    expect(multiply.calculate(1, 0)).toBe(0);
  });
  test("should (-5) * (-4) to equal 20", () => {
    expect(multiply.calculate(-5, -4)).toBe(20);
  });
});