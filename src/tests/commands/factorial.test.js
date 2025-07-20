import { describe, expect, test } from "@jest/globals";

import { Factorial } from "../../script/commands/operation-commands/factorial/factorial";

describe("Factorial", () => {
  const factorial = new Factorial();

  test("should !3 to equal 6", () => {
    expect(factorial.calculate(3)).toBe(6);
  });
  test("should !6 to equal 720", () => {
    expect(factorial.calculate(6)).toBe(720);
  });
  test("should !0 to equal 0", () => {
    expect(factorial.calculate(0)).toBe(0);
  });
  test("should !(-5) to throw Error", () => {
    expect(() => { factorial.calculate(-5); }).toThrow("Factorial is defined only for non-negative number.");
  });
  test("Non integers should throw Error", () => {
    expect(() => { factorial.calculate(0.5); }).toThrow("Factorial is defined only for integers.");
  });
});