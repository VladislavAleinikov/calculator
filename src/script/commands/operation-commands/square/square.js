import { parseNumber } from "../../../utils.js";

export class Square {
  outputMask = "l<sup>2</sup>";

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
    return parseNumber(leftOperand, 1) ** 2;
  }
}