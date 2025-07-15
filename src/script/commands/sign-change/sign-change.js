export class SignChange {
  execute(leftOperand) {
    return leftOperand && leftOperand * (-1);
  }
}