export class Factorial {
  execute(leftOperand) {
    if (leftOperand < 0) {
      throw new Error("Factorial is defined only for non-negative number.");
    } else if (!Number.isInteger(leftOperand)) {
      throw new Error("Factorial is defined only for integers.");
    }

    let result = leftOperand && 1;

    for (let i = 1; i <= leftOperand; i++) {
      result *= i;
    }

    return result;
  }
}