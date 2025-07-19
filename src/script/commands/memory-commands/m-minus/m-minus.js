import { parseNumber } from "../../../utils.js";

export class MMinus {
  execute(calculatorReceiver) {
    if (calculatorReceiver.operation) {
      calculatorReceiver.memory -= calculatorReceiver.operation.calculate(
        calculatorReceiver.leftOperand,
        calculatorReceiver.rightOperand,
      );
    } else {
      calculatorReceiver.memory -= parseNumber(calculatorReceiver.leftOperand);
    }
  }
}