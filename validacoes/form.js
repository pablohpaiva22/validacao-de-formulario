import email from './email.js'
import nome from './nome.js'

export default function form() {
    const $form = document.querySelector('.form')
    const $email = document.querySelector('input[type="email"]')
    const $name = document.querySelector('input[type="text"]')
    const $password = document.querySelector('input[type="password"]')
    const $checkbox = document.querySelector('input[type="checkbox"]')

    const $emailValidation = document.querySelector('.emailValidation')
    const $nameValidation1 = document.querySelector('.nameValidation1')
    const $passValidation = document.querySelector('.passValidation')
    const $checkboxValidation = document.querySelector('.checkboxValidation')

    const $enviado = document.querySelector('.enviado')

    const regexp2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        if($email.value.match(regexp2) == null) {
            $emailValidation.classList.add('ativo')
            $email.style.borderColor = 'red'
            email()
        }

        if($name.value == '') {
            $nameValidation1.classList.add('ativo')
            $name.style.borderColor = 'red'
            nome()
        }

        if($password.value == '') {
            $passValidation.classList.add('ativo')
            $password.style.borderColor = 'red'
        }

        if(!$checkbox.checked) {
            $checkboxValidation.classList.add('ativo')
        } else {
            $checkboxValidation.classList.remove('ativo')
        }

        if($email.value.match(regexp2) !== null && $name.value !== '' && $password.value !== '' && $password.value.length >= 6 && $checkbox.checked) {
            $enviado.classList.add('ativo')
            setTimeout(() => {
                $form.submit()
            }, 1500);
        }
    }
}

