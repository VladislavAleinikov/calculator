import { parseNumber } from "../../../utils.js";

export class SquareRoot {
  outputMask = "<sup>2</sup>&radic;l";

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
    leftOperand = parseNumber(leftOperand, 1);

    if (leftOperand < 0) {
      throw new Error("Can't take the root of a negative number.");
    }

    return leftOperand ** 0.5;
  }
}