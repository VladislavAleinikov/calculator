import { describe, expect, test } from "@jest/globals";

import { Percent } from "./percent";

describe("Percent", () => {
  const percent = new Percent();

  test("should 25 % 4 to equal 1", () => {
    expect(percent.execute(25, 4)).toBe(1);
  });
  test("should -50 % 9 to equal -4.5", () => {
    expect(percent.execute(-50, 9)).toBe(-4.5);
  });
  test("should 1000 % 3 to equal 30", () => {
    expect(percent.execute(1000, 3)).toBe(30);
  });
  test("should -5 % -10 to equal 0.5", () => {
    expect(percent.execute(-5, -10)).toBe(0.5);
  });
});