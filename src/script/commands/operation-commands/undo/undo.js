export class Undo {
  execute(calculatorReceiver) {
    if (calculatorReceiver.cachedOperations.length) {
      const [leftOperand, rightOperand, operation] = calculatorReceiver.cachedOperations.pop();
      calculatorReceiver.leftOperand = leftOperand;
      calculatorReceiver.rightOperand = rightOperand;
      calculatorReceiver.operation = operation;
    }
  }
}