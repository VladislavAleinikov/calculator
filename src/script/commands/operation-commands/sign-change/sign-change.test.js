import { describe, expect, test } from "@jest/globals";

import { SignChange } from "./sign-change";

describe("Sign change", () => {
  const signChange = new SignChange();

  test("should 1 to equal -1", () => {
    expect(signChange.calculate(1)).toBe(-1);
  });
  test("should -1 to equal 1", () => {
    expect(signChange.calculate(-1)).toBe(1);
  });
  test("should 0 to equal 0", () => {
    expect(signChange.calculate(0)).toBe(0);
  });
});