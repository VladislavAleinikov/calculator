export class Reciprocal {
  execute(leftOperand) {
    if (leftOperand === 0) {
      throw new Error("Can't divide by zero.");
    }
    
    return 1 / leftOperand;
  }
}