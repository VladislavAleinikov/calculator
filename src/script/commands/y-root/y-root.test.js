import { describe, expect, test } from "@jest/globals";

import { YRoot } from "./y-root";

describe("Y root", () => {
  const yRoot = new YRoot();

  test("should 4 ^ 0.5 to equal 2", () => {
    expect(yRoot.execute(4, 2)).toBe(2);
  });
  test("should (-5) ^ 0.5 to throw Error", () => {
    expect(() => { yRoot.execute(-5, 2); }).toThrow("Can't take the root of a negative number.");
  });
  test("zero root should throw Error", () => {
    expect(() => { yRoot.execute(1, 0); }).toThrow("Can't divide by zero.");
  });
  test("should 0 ^ 0.5 to equal 0", () => {
    expect(yRoot.execute(0, 2)).toBe(0);
  });
  test("should 625 ^ 0.25 to equal 5", () => {
    expect(yRoot.execute(625, 4)).toBe(5);
  });
});