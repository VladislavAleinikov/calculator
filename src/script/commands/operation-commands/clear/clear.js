export class Clear {
  execute(calculatorReceiver) {
    calculatorReceiver.currState = "";
    calculatorReceiver.futureState = "";
    calculatorReceiver.errorState = "";
    calculatorReceiver.leftOperand = "";
    calculatorReceiver.rightOperand = "";
    calculatorReceiver.operation = null;
  }
}