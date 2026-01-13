import { describe, expect, test } from "@jest/globals";

import { Power10 } from "../../script/commands/operation-commands/power-10/power-10";

describe("Power 10", () => {
  const power10 = new Power10();

  test("should 10 ^ 3 to equal 1000", () => {
    expect(power10.calculate(3)).toBe(1000);
  });
  test("should 10 ^ (-3) to equal -125", () => {
    expect(power10.calculate(-3)).toBe(0.001);
  });
  test("should 10 ^ 0 to equal 1", () => {
    expect(power10.calculate(0)).toBe(1);
  });
});