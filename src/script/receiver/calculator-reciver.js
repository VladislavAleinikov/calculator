export class CalculatorReceiver {
  currState = "";
  #futureState = "";
  errorState = "";
  leftOperand = "";
  rightOperand = "";
  operation = null;
  memory = 0;
  cachedOperations = [];

  get futureState() {
    return this.#futureState && "=" + this.#futureState;
  }

  set futureState(state) {
    this.#futureState = state;
  }
}