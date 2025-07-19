export class Equals {
  execute(calculatorReceiver) {
    if (calculatorReceiver.operation) {
      calculatorReceiver.cachedOperations.push([
        calculatorReceiver.leftOperand,
        calculatorReceiver.rightOperand,
        calculatorReceiver.operation,
      ]);
      calculatorReceiver.errorState = "";
      calculatorReceiver.futureState = "";
      calculatorReceiver.leftOperand = calculatorReceiver.operation.calculate(
        calculatorReceiver.leftOperand,
        calculatorReceiver.rightOperand,
      );
      calculatorReceiver.rightOperand = "";
      calculatorReceiver.operation = null;
      calculatorReceiver.currState = calculatorReceiver.leftOperand;
    }
  }
}