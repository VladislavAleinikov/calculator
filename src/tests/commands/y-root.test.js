import { describe, expect, test } from "@jest/globals";

import { YRoot } from "../../script/commands/operation-commands/y-root/y-root";

describe("Y root", () => {
  const yRoot = new YRoot();

  test("should 4 ^ 0.5 to equal 2", () => {
    expect(yRoot.calculate(4, 2)).toBe(2);
  });
  test("should (-5) ^ 0.5 to throw Error", () => {
    expect(() => { yRoot.calculate(-5, 2); }).toThrow("Can't take the root of a negative number.");
  });
  test("zero root should throw Error", () => {
    expect(() => { yRoot.calculate(1, 0); }).toThrow("Can't take zero root.");
  });
  test("should 0 ^ 0.5 to equal 0", () => {
    expect(yRoot.calculate(0, 2)).toBe(0);
  });
  test("should 625 ^ 0.25 to equal 5", () => {
    expect(yRoot.calculate(625, 4)).toBe(5);
  });
});