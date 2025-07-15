export class SquareRoot {
  execute(leftOperand) {
    if (leftOperand < 0) {
      throw new Error("Can't take the root of a negative number.");
    }
    
    return leftOperand ** 0.5;
  }
}