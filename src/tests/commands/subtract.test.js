import { describe, expect, test } from "@jest/globals";

import { Subtract } from "../../script/commands/operation-commands/subtract/subtract";

describe("Subtract", () => {
  const subtract = new Subtract();

  test("should 2 - 1 to equal 1", () => {
    expect(subtract.calculate(2, 1)).toBe(1);
  });
  test("should 5 - 10 to equal -5", () => {
    expect(subtract.calculate(5, 10)).toBe(-5);
  });
  test("should (-5) - 5 to equal 0", () => {
    expect(subtract.calculate(-5, 5)).toBe(-10);
  });
  test("should (-10) - (-10) to equal -4", () => {
    expect(subtract.calculate(-10, -10)).toBe(0);
  });
});