import "../style.css";
import "./theme-switcher.js";
import { Invoker } from "./invoker/invoker.js";
import { CalculatorReceiver } from "./receiver/calculator-reciver.js";

const buttons = document.querySelector(".buttons");
const currState = document.querySelector(".current-state");
const futureState = document.querySelector(".future-state");
const errorState = document.querySelector(".error-state");
const calculatorReceiver = new CalculatorReceiver();
const invoker = new Invoker(calculatorReceiver);
buttons.addEventListener("click", (e) => {
  const target = e.target.closest("li");
  const sign = target.dataset.sign;

  invoker.execute(sign);

  currState.innerHTML = calculatorReceiver.currState;
  futureState.innerHTML = calculatorReceiver.futureState;
  errorState.innerHTML = calculatorReceiver.errorState;
});