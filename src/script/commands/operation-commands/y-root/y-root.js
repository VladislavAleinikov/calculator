import { parseNumber } from "../../../utils.js";

export class YRoot {
  outputMask = "<sup>r</sup>&radic;l";

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
    leftOperand = parseNumber(leftOperand, 1);
    rightOperand = parseNumber(rightOperand, 1);

    if (leftOperand < 0) {
      throw new Error("Can't take the root of a negative number.");
    } if (rightOperand === 0) {
      throw new Error("Can't take zero root.");
    }

    return leftOperand ** (1 / rightOperand);
  }
}