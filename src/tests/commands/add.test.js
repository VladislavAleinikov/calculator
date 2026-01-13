import { describe, expect, test } from "@jest/globals";

import { Add } from "../../script/commands/operation-commands/add/add";

describe("Add", () => {
  const add = new Add();

  test("should 1 + 2 to equal 3", () => {
    expect(add.calculate(1, 2)).toBe(3);
  });
  test("should 1 + (-2) to equal -1", () => {
    expect(add.calculate(1, -2)).toBe(-1);
  });
  test("should 0 + 0 to equal 0", () => {
    expect(add.calculate(0, 0)).toBe(0);
  });
  test("should (-2) + (-2) to equal -4", () => {
    expect(add.calculate(-2, -2)).toBe(-4);
  });
  test("should 0.3 + 0.7 to equal 1", () => {
    expect(add.calculate(0.3, 0.7)).toBe(1);
  });
});