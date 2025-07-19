import { parseNumber } from "../../../utils.js";

export class Power {
  outputMask = "l<sup>r</sup>";

  execute(calculatorReceiver) {
    if (calculatorReceiver.operation) {
      calculatorReceiver.cachedOperations.push([
        calculatorReceiver.leftOperand,
        calculatorReceiver.rightOperand,
        calculatorReceiver.operation,
      ]);
      calculatorReceiver.leftOperand = calculatorReceiver.operation.calculate(
        calculatorReceiver.leftOperand,
        calculatorReceiver.rightOperand,
      );
      calculatorReceiver.rightOperand = "";
    }

    calculatorReceiver.operation = this;
  }

  calculate(leftOperand, rightOperand) {
    leftOperand = parseNumber(leftOperand);
    rightOperand = parseNumber(rightOperand, 1);

    if (leftOperand < 0 && (rightOperand > -1 && rightOperand < 1)) {
      throw new Error("Can't take the root of a negative number.");
    } else if (leftOperand == 0 && rightOperand < 0) {
      throw new Error("Can't divide by zero.");
    }

    return leftOperand ** rightOperand;
  }
}