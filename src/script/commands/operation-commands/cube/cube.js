import { parseNumber } from "../../../utils.js";

export class Cube {
  outputMask = "l&#247;r";

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
    return parseNumber(leftOperand) ** 3;
  }
}