export class NumberCommand {
  #sign = 0;

  setSign(sign) {
    this.#sign = sign;
    return this;
  }

  execute(calculatorReceiver) {
    if (calculatorReceiver.operation) {
      calculatorReceiver.rightOperand += this.#sign;

      try {
        calculatorReceiver.futureState = calculatorReceiver.operation.calculate(
          calculatorReceiver.leftOperand,
          calculatorReceiver.rightOperand,
        );
      } catch {
        calculatorReceiver.futureState = "Error";
      }
    } else {
      calculatorReceiver.leftOperand += this.#sign;
    }
  }
}