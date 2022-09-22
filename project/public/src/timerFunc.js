export { startTimer, check };
import { dateTimer, dateSoundOfEnded, dateScreen } from './main.js';

function startTimer() {
    if (dateTimer.value > 0) {
        let timeSec = parseInt(dateTimer.value);
        control = false;
        let time = setInterval(() => {
            if (timeSec == 0) {
                clearInterval(time);
                dateScreen.innerHTML = "0:0:0";
                dateSoundOfEnded.play();
            } else if (control) {
                clearInterval(time);
                dateScreen.innerHTML = "0:0:0";
            } else {
                let hour = parseInt(timeSec / 3600);
                let minuts = parseInt((timeSec - hour * 3660) / 60);
                let seconds = parseInt(timeSec - hour * 3660 - minuts * 60);
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
                dateScreen.innerHTML = strTimer;
            }
            --timeSec;
        }, 1000)
    } else {
        dateScreen.innerHTML = 'введи число';
    }

};
let control = false;
function check() {
    return control = true;
};

