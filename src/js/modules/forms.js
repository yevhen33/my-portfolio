function forms() {
    const form = document.querySelector('form'),
          inputs = document.querySelectorAll('input'),
          textarea = document.querySelector('textarea'),
          modal = document.querySelector('.contacts__triggers'),
          replacement = document.querySelector('.contacts__policy'),
          over = document.querySelector('.overlay');

    const message = {
        loading: 'Загрузка данных...',
        success: 'Спасибо! Я получил ваше сообщение',
        failure: 'Произошла ошибка! Повторите отправку чуть позже.'
    };

    const postData = async (url, data) => {
        replacement.classList.add('hide');
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url, {
            method: "POST",
            body: data
        });
        return await result.text();
    }

    function clearInputs() {
        inputs.forEach(input => {
            input.value = '';
        });
        textarea.value = '';
    }

    function showThanks() {
        setTimeout(() => {
            over.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 2000);
    }

    function hideThanks() {
        setTimeout(() => {
            over.classList.remove('active');
            document.body.style.overflow = '';
        }, 5000);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        modal.appendChild(statusMessage);

        let closeMessage = () => {setInterval(() => {
            replacement.classList.remove('hide');
            statusMessage.remove();
            }, 2000);
        };

        const formData = new FormData(form);

        postData('mailer/server.php', formData)
            .then(result => {
                console.log(result);
                statusMessage.textContent = message.success;
                showThanks();   
                hideThanks();     
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearInputs();
                closeMessage();
                clearInterval(closeMessage);
            });
    });
};

export default forms;