function tabs() {
    let info = document.querySelector ('.info-header'),
        tab = document.querySelectorAll ('.info-header-tab'),
        tabContent = document.querySelectorAll ('.info-tabcontent');

    function hideContentTab(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideContentTab(1);

    function showContentTab(b) {
        for (let i = b; i < tabContent.length; i++) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener ('click', (event) => {
        let target = event.target;
        if (target && event.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabContent.length; i++) {
                if (target === tab[i]) {
                    hideContentTab(0);
                    showContentTab(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;