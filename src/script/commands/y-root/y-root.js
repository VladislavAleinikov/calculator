export class YRoot {
  execute(leftOperand, rightOperand) {
    if (leftOperand < 0) {
      throw new Error("Can't take the root of a negative number.");
    } if (rightOperand === 0) {
      throw new Error("Can't divide by zero.");
    }

    return leftOperand ** (1 / rightOperand);
  }
}