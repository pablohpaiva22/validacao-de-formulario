export default function form() {
    const $form = document.querySelector('.form')
    const $email = document.querySelector('input[type="email"]')
    const $name = document.querySelector('input[type="text"]')
    const $password = document.querySelector('input[type="password"]')
    const $checkbox = document.querySelector('input[type="checkbox"]')
    const $emailValidation = document.querySelector('.emailValidation')
    const $nameValidation = document.querySelector('.nameValidation')
    const $passValidation = document.querySelector('.passValidation')
    const $checkboxValidation = document.querySelector('.checkboxValidation')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        
        if($email.value == '' || $name == '' || $password == '' || $checkbox == '') {
            if($email.value == '') $emailValidation.classList.add('ativo')
            else $emailValidation.classList.remove('ativo')

            if($name.value == '') $nameValidation.classList.add('ativo')
            else $nameValidation.classList.remove('ativo')

            if($password.value == '') $passValidation.classList.add('ativo')
            else $passValidation.classList.remove('ativo')

            if($checkbox.checked == false) $checkboxValidation.classList.add('ativo')
            else $checkboxValidation.classList.remove('ativo')
        } else {
            $form.submit()
        }
    }
}