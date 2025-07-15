import { describe, expect, test } from "@jest/globals";

import { Add } from "./add";

describe("Add", () => {
  const add = new Add();

  test("should 1 + 2 to equal 3", () => {
    expect(add.execute(1, 2)).toBe(3);
  });
  test("should 1 + (-2) to equal -1", () => {
    expect(add.execute(1, -2)).toBe(-1);
  });
  test("should 0 + 0 to equal 0", () => {
    expect(add.execute(0, 0)).toBe(0);
  });
  test("should (-2) + (-2) to equal -4", () => {
    expect(add.execute(-2, -2)).toBe(-4);
  });
  test("should 0.3 + 0.7 to equal 1", () => {
    expect(add.execute(0.3, 0.7)).toBe(1);
  });
});