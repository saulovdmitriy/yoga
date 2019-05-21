function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

    totalValue.innerHTML = 0;


    persons.addEventListener('input', function() {

        if (!(validInput(this.value))) {
            this.value = this.value.slice(0, -1);
        }

        personsSum = +this.value;

        if(personsSum > 0 && daysSum > 0) {
            total = daysSum * personsSum * place.options[place.selectedIndex].value * 4000;
            totalValue.innerHTML = total;
        } else {
            totalValue.innerHTML = 0;
        }
    });

    restDays.addEventListener('input', function() {

        if (!(validInput(this.value))) {
            this.value = this.value.slice(0, -1);
        }

        daysSum = +this.value;

        if(personsSum > 0 && daysSum > 0) {
            total = daysSum * personsSum * place.options[place.selectedIndex].value * 4000;
            totalValue.innerHTML = total;
        } else {
            totalValue.innerHTML = 0;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });


    function validInput(elem) {
        return /\d$/.test(elem);
    }
}

module.exports = calc;