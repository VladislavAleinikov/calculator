export class Divide {
  execute(leftOperand, rightOperand) {
    if (rightOperand === 0) {
      throw new Error("Can't divide by zero.");
    }
    
    return leftOperand / rightOperand;
  }
}