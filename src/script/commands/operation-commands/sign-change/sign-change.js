import { parseNumber } from "../../../utils.js";

export class SignChange {
  outputMask = "&#177;l";

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
    return leftOperand && leftOperand * (-1);
  }
}