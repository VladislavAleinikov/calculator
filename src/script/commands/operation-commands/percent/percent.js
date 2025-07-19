import { parseNumber } from "../../../utils.js";

export class Percent {
  outputMask = "l% r";

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
    return (parseNumber(leftOperand) * parseNumber(rightOperand, 1)) / 100;
  }
}