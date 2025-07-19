import { parseNumber } from "../../../utils.js";

export class Factorial {
  outputMask = "!l";

  execute(calculatorReceiver) {
    calculatorReceiver.cachedOperations.push([
      calculatorReceiver.leftOperand,
      calculatorReceiver.rightOperand,
      calculatorReceiver.operation,
    ]);

    if (calculatorReceiver.operation) {
      calculatorReceiver.rightOperand = this.calculate(calculatorReceiver.rightOperand);
    } else {
      calculatorReceiver.leftOperand = this.calculate(calculatorReceiver.leftOperand);
    }
  }

  calculate(leftOperand) {
    leftOperand = parseNumber(leftOperand);

    if (leftOperand < 0) {
      throw new Error("Factorial is defined only for non-negative number.");
    } else if (!Number.isInteger(leftOperand)) {
      throw new Error("Factorial is defined only for integers.");
    }

    let result = leftOperand && 1;

    for (let i = 1; i <= leftOperand; i++) {
      result *= i;
    }

    return result;
  }
}