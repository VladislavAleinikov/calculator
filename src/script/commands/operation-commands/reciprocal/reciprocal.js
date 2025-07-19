import { parseNumber } from "../../../utils.js";

export class Reciprocal {
  outputMask = "<sup>1</sup>/<sub>l</sub>";

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

    if (leftOperand === 0) {
      throw new Error("Can't divide by zero.");
    }

    return 1 / leftOperand;
  }
}