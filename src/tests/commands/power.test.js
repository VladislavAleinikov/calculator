import { describe, expect, test } from "@jest/globals";

import { Power } from "../../script/commands/operation-commands/power/power";

describe("Power", () => {
  const power = new Power();

  test("should 4 ^ 4 to equal 256:", () => {
    expect(power.calculate(4, 4)).toBe(256);
  });
  test("should 2 ^ (-2) to equal 0.25", () => {
    expect(power.calculate(2, -2)).toBe(0.25);
  });
  test("should 5 ^ 0 to equal 1", () => {
    expect(power.calculate(5, 0)).toBe(1);
  });
  test("should 0 ^ 0 to equal 1", () => {
    expect(power.calculate(0, 0)).toBe(1);
  });
  test("should (-5) ^ 4 to equal 625", () => {
    expect(power.calculate(-5, 4)).toBe(625);
  });
  test("should (-5) ^ 0.5 to throw Error", () => {
    expect(() => { power.calculate(-5, 0.5); }).toThrow("Can't take the root of a negative number.");
  });
  test("should 0 ^ (-5) to throw Error", () => {
    expect(() => { power.calculate(0, -5); }).toThrow("Can't divide by zero.");
  });
});