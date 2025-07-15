export class Power {
  execute(leftOperand, rightOperand) {
    if (leftOperand < 0 && (rightOperand > -1 && rightOperand < 1)) {
      throw new Error("Can't take the root of a negative number.");
    } else if (leftOperand == 0 && rightOperand < 0) {
      throw new Error("Can't divide by zero.");
    }

    return leftOperand ** rightOperand;
  }
}