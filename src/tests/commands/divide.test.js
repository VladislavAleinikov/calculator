import { describe, expect, test } from "@jest/globals";

import { Divide } from "../../script/commands/operation-commands/divide/divide";

describe("Divide", () => {
  const divide = new Divide();

  test("should 20 / 5 to equal 4", () => {
    expect(divide.calculate(20, 5)).toBe(4);
  });
  test("should 3 / 5 to equal 0.6", () => {
    expect(divide.calculate(3, 5)).toBe(0.6);
  });
  test("should 1 / 0 to throw Error", () => {
    expect(() => { divide.calculate(1, 0); }).toThrow("Can't divide by zero.");
  });
  test("should (-2) / 2 to equal -1", () => {
    expect(divide.calculate(-2, 2)).toBe(-1);
  });
});