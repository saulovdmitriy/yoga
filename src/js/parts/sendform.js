function sendform() {

    let message = {
        loading: `<img src="img/ajax-loader.gif" class="status__img">`,
        success: `<img src="img/checked.png" class="status__img"><span class="status__message">В ближайшее время мы с вами свяжемся</span>`,
        failure: `<img src="img/warning.png" class="status__img"><span class="status__message">Введите данные снова</span>`
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        myPhone = document.querySelectorAll('input[type="tel"]');

    for (let i = 0; i < myPhone.length; i++) {
        myPhone[i].addEventListener('input',  function() {

            if (!(/^\+?[()\d \-]*$/.test(myPhone[i].value))) {
                this.value = this.value.slice(0, -1);
            }

            console.log(/^\+?[()\d \-]*$/.test(myPhone[i].value));
            
        });
        
    }

    // !(/^(\+|\d)|\d/g

    statusMessage.classList.add('status');

    document.body.addEventListener('submit', (event) => {
        let target = event.target;
        event.preventDefault(); 
        target.appendChild(statusMessage);

        let formData = new FormData(target);

        function postData(data) {

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');
                
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                request.onreadystatechange = function() {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readystate === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };
                
                request.send(data);
            });
        }

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => {statusMessage.innerHTML = message.loading})
            .then(() => {statusMessage.innerHTML = message.success;})
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);

    });
}

module.exports = sendform;