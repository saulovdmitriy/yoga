const timer = () => {
    let deadline = '2019-05-23';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    const setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector ('.hours'),
            minutes = timer.querySelector ('.minutes'),
            seconds = timer.querySelector ('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = ("0" + t.hours).slice(-2);
            minutes.textContent  = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);


            if (t.total <= 0) {
                clearInterval(timeInterval);

                let zero = '0' + '0';

                hours.textContent = zero;
                minutes.textContent = zero;
                seconds.textContent = zero;
            }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;