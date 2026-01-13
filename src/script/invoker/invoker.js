import { replaceByMask } from "../utils.js";
import {
  Add,
  Subtract,
  Multiply,
  Divide,
  Factorial,
  Square,
  Cube,
  Power,
  Power10,
  SquareRoot,
  YRoot,
  Percent,
  Reciprocal,
  SignChange,
  Equals,
} from "../commands/operation-commands/index.js";
import { MClear, MMinus, MPlus, MRead } from "../commands/memory-commands/index.js";
import { Clear } from "../commands/operation-commands/clear/clear.js";
import { Undo } from "../commands/operation-commands/undo/undo.js";
import { NumberCommand } from "../commands/number-command/number-command.js";


export class Invoker {
  #calculatorReceiver = null;
  #commands = {
    "equals": new Equals(),
    "clear": new Clear(),
    "undo": new Undo(),
    "add": new Add(),
    "subtract": new Subtract(),
    "multiply": new Multiply(),
    "divide": new Divide(),
    "factorial": new Factorial(),
    "square": new Square(),
    "cube": new Cube(),
    "power": new Power(),
    "power-10": new Power10(),
    "square-root": new SquareRoot(),
    "y-root": new YRoot(),
    "reciprocal": new Reciprocal(),
    "sign-change": new SignChange(),
    "percent": new Percent(),
    "m-clear": new MClear(),
    "m-read": new MRead(),
    "m-plus": new MPlus(),
    "m-minus": new MMinus(),
    "number": new NumberCommand(),
  };

  constructor(calculatorReceiver) {
    this.#calculatorReceiver = calculatorReceiver;
  }

  execute(sign) {
    this.#calculatorReceiver.errorState = "";
    const command = this.#commands[sign] ?? this.#commands["number"].setSign(sign);

    try {
      command.execute(this.#calculatorReceiver);
    } catch (error) {
      this.#commands["clear"].execute(this.#calculatorReceiver);
      this.#calculatorReceiver.errorState = error.message;
    }

    if (this.#calculatorReceiver.operation) {
      this.#calculatorReceiver.currState = replaceByMask(
        this.#calculatorReceiver.operation.outputMask,
        this.#calculatorReceiver.leftOperand,
        this.#calculatorReceiver.rightOperand,
      );
    } else {
      this.#calculatorReceiver.currState = this.#calculatorReceiver.leftOperand;
    }
  }
}