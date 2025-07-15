import { describe, expect, test } from "@jest/globals";

import { Divide } from "./divide";

describe("Divide", () => {
  const divide = new Divide();

  test("should 20 / 5 to equal 4", () => {
    expect(divide.execute(20, 5)).toBe(4);
  });
  test("should 3 / 5 to equal 0.6", () => {
    expect(divide.execute(3, 5)).toBe(0.6);
  });
  test("should 1 / 0 to throw Error", () => {
    expect(() => { divide.execute(1, 0); }).toThrow("Can't divide by zero.");
  });
  test("should (-2) / 2 to equal -1", () => {
    expect(divide.execute(-2, 2)).toBe(-1);
  });
});