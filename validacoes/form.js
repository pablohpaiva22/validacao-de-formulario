import email from './email.js'
import nome from './nome.js'

export default function form() {
    const $form = document.querySelector('.form')
    const $email = document.querySelector('input[type="email"]')
    const $nome = document.querySelector('input[type="text"]')
    const $senha = document.querySelector('input[type="password"]')
    const $checkbox = document.querySelector('input[type="checkbox"]')

    const $campoEmail = document.querySelector('.campoEmail')
    const $campoNome = document.querySelector('.campoNome')
    const $campoSenha = document.querySelector('.campoSenha')
    const $checkboxValidation = document.querySelector('.checkboxValidation')

    const $enviado = document.querySelector('.enviado')

    const regexp2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        if($email.value.match(regexp2) == null) {
            $campoEmail.classList.add('ativo')
            $email.style.borderColor = 'red'
            email()
        }

        if($nome.value == '') {
            $campoNome.classList.add('ativo')
            $nome.style.borderColor = 'red'
            nome()
        }

        if($senha.value == '') {
            $campoSenha.classList.add('ativo')
            $senha.style.borderColor = 'red'
        }

        if(!$checkbox.checked) {
            $checkboxValidation.classList.add('ativo')
        } else {
            $checkboxValidation.classList.remove('ativo')
        }

        if($email.value.match(regexp2) !== null && $nome.value !== '' && $senha.value !== '' && $senha.value.length >= 6 && $checkbox.checked) {
            $enviado.classList.add('ativo')
            setTimeout(() => {
                $form.submit()
            }, 1500);
        }
    }
}

