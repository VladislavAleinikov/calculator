import { parseNumber } from "../../../utils.js";

export class Divide {
  outputMask = "l&#247;r";

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
    
    if (rightOperand === 0) {
      throw new Error("Can't divide by zero.");
    }

    return leftOperand / rightOperand;
  }
}