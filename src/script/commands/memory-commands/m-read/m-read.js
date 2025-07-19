export class MRead {
  execute(calculatorReceiver) {
    calculatorReceiver.leftOperand = calculatorReceiver.memory;
    calculatorReceiver.rightOperand = "";
    calculatorReceiver.operation = null;
  }
}