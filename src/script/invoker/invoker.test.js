import { describe, expect, test } from "@jest/globals";

import { Invoker } from "./invoker.js";
import { CalculatorReceiver } from "../receiver/calculator-reciver.js";

describe("Invoker", () => {
  const calculatorReceiver = new CalculatorReceiver();
  const invoker = new Invoker(calculatorReceiver);

  const executeSigns = (signs, invoker) => {
    signs.split("|").forEach(sign => {
      invoker.execute(sign);
    });
  };

  describe("Clear", () => {
    test("should clear receiver after operations", () => {
      executeSigns("1|2|3|add|2|3", invoker);
      invoker.execute("clear");

      expect(calculatorReceiver.currState).toBe("");

      invoker.execute("clear");
    });
  });

  describe("Equals", () => {
    test("should return operation result after equals operation", () => {
      executeSigns("1|2|3|add|2|3", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("146");

      invoker.execute("clear");
    });
    test("should return operation result even without right operand", () => {
      executeSigns("1|2|3|add", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("123");

      invoker.execute("clear");
    });
    test("should do nothing if no operation", () => {
      executeSigns("1|2|3", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("123");

      invoker.execute("clear");
    });
    test("should do nothing if no operation and operand", () => {
      executeSigns("", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("");

      invoker.execute("clear");
    });
  });

  describe("Operation chain", () => {
    test("should operation result set to left operand after another operation", () => {
      executeSigns("1|2|3|add|2|3|add", invoker);

      expect(calculatorReceiver.currState.toString()).toBe("146+");

      invoker.execute("clear");
    });
    test("should operation result set to left operand after another operation", () => {
      executeSigns("1|2|3|add|2|3|subtract", invoker);

      expect(calculatorReceiver.currState.toString()).toBe("146-");

      invoker.execute("clear");
    });
  });

  describe("Errors", () => {
    test("should clear receiver and set state after errors", () => {
      executeSigns("1|2|3|divide|0", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState).toBe("");
      expect(calculatorReceiver.errorState).toBe("Can't divide by zero.");

      invoker.execute("clear");
    });
  });

  describe("Unary operators", () => {
    test("should change left operand if no operation selected", () => {
      executeSigns("1|2|3|sign-change", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("-123");

      invoker.execute("clear");
    });
    test("should change right operand if it exists", () => {
      executeSigns("1|2|3|add|1|0|sign-change", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("113");

      invoker.execute("clear");
    });
  });

  describe("Memory", () => {
    test("should set memory value of zero", () => {
      executeSigns("1|2|3|m-plus", invoker);
      invoker.execute("m-clear");

      expect(calculatorReceiver.memory).toBe(0);

      invoker.execute("clear");
    });
    test("should add to memory value of current state", () => {
      executeSigns("1|2|3|m-plus", invoker);

      expect(calculatorReceiver.memory).toBe(123);

      invoker.execute("m-clear");
      invoker.execute("clear");
    });
    test("should add to memory calculated value of current state", () => {
      executeSigns("1|2|3|add|1|2|m-plus", invoker);

      expect(calculatorReceiver.memory).toBe(135);

      invoker.execute("m-clear");
      invoker.execute("clear");
    });
    test("should subtract from memory value of current state", () => {
      executeSigns("1|2|3|m-minus", invoker);

      expect(calculatorReceiver.memory).toBe(-123);

      invoker.execute("m-clear");
      invoker.execute("clear");
    });
    test("should change current state to memory value", () => {
      executeSigns("1|2|3|m-plus|m-plus|m-read", invoker);

      expect(calculatorReceiver.currState.toString()).toBe("246");

      invoker.execute("m-clear");
      invoker.execute("clear");
    });
  });

  describe("Parser", () => {
    test("should correctly parse non-exist value to zero", () => {
      executeSigns("subtract|1|2", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("-12");

      invoker.execute("clear");
    });
    test("should correctly parse dot value to zero", () => {
      executeSigns(".|subtract|1|2", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("-12");

      invoker.execute("clear");
    });
    test("should correctly parse .5 to 0.5", () => {
      executeSigns(".|5|subtract|1|2", invoker);
      invoker.execute("equals");

      expect(calculatorReceiver.currState.toString()).toBe("-11.5");

      invoker.execute("clear");
    });
  });

  describe("Future state", () => {
    test("should set future state if right operand exists", () => {
      executeSigns("1|2|3|add|2|3", invoker);

      expect(calculatorReceiver.futureState).toBe("=146");

      invoker.execute("clear");
    });
    test("should set future state to error if operatioin will return error", () => {
      executeSigns("1|2|3|divide|0", invoker);

      expect(calculatorReceiver.futureState).toBe("=Error");

      invoker.execute("clear");
    });
    test("should clear future state after equals operation", () => {
      executeSigns("1|2|3|add|1|2|equals", invoker);

      expect(calculatorReceiver.futureState).toBe("");

      invoker.execute("clear");
    });
  });

  describe("Undo", () => {
    test("should return previous operation", () => {
      executeSigns("1|2|3|add|2|3|equals", invoker);
      invoker.execute("undo");

      expect(calculatorReceiver.currState).toBe("123+23");

      invoker.execute("clear");
    });
    test("should return previous operations", () => {
      executeSigns("1|2|3|add|2|3|subtract|45|equals", invoker);
      
      invoker.execute("undo");
      expect(calculatorReceiver.currState).toBe("146-45");

      invoker.execute("undo");
      expect(calculatorReceiver.currState).toBe("123+23");

      invoker.execute("clear");
    });
    test("should do nothing if no memorized operations left", () => {
      executeSigns("1|2|3|add|1|2", invoker);
      invoker.execute("undo");

      expect(calculatorReceiver.currState).toBe("123+12");

      invoker.execute("clear");
    });
    test("should memorize unary operations", () => {
      executeSigns("1|2|3|add|1|2|sign-change|equals", invoker);
      
      invoker.execute("undo");
      expect(calculatorReceiver.currState).toBe("123+-12");

      invoker.execute("undo");
      expect(calculatorReceiver.currState).toBe("123+12");

      invoker.execute("clear");
    });
  });
});