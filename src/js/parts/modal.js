function modal() {
    let more = document.querySelector ('.more'),
    overlay = document.querySelector ('.overlay'),
    close = document.querySelector ('.popup-close'),
    descTab = document.querySelectorAll ('.description'),
    descBtn = document.querySelectorAll ('.description-btn');


    function modal(btn) {

        btn.addEventListener('click', function() {

            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';

        });

        close.addEventListener('click', function() {

            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';

        });
    }
    modal(more);

    //Добавляю функцию открытия окна на каждую кнопку "Подробнее"
    for (let i = 0; i < descTab.length; i++) {
        modal(descBtn[i]);
    }
}

module.exports = modal;