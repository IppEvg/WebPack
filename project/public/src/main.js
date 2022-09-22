import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

import { startTimer, check } from "./timerFunc.js";
export { dateTimer, dateSoundOfEnded, dateScreen };
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const dateTimer = document.getElementById("timer");
const dateSoundOfEnded = document.getElementById('datetime_res');


import chunk from "lodash/chunk";
console.log(chunk(["a", "b", "c", "d"]), 2);

// const d

dateCalcForm.addEventListener("submit", handleCalcDates);
const dateScreen = document.getElementById('screen');
const button = document.getElementById('button');
const buttonStop = document.getElementById('stop');
button.addEventListener("click", startTimer);

buttonStop.addEventListener('click', check);


function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
};



