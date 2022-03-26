 export default function email() {
    const $email = document.querySelector('input[type="email"]')

    const $emailValidation1 = document.querySelector('.emailValidation1 ')
    const $emailValidation2 = document.querySelector('.emailValidation2')
    const $emailValidation3 = document.querySelector('.emailValidation3')
    const $emailValidation4 = document.querySelector('.emailValidation4')

    $email.addEventListener('keyup', handleKeyUp)

    function handleKeyUp() {

        if($email.value !== '') {
            if(!$email.value.includes('.com')) {
                $emailValidation1.classList.add('ativo')
            } else {
                $emailValidation1.classList.remove('ativo')
            }

            if(!$email.value.includes('@')) {
                $emailValidation2.classList.add('ativo')
            } else {
                $emailValidation2.classList.remove('ativo')
            }

            if($email.value.includes(' ')) {
                $emailValidation3.classList.add('ativo')
            } else {
                $emailValidation3.classList.remove('ativo')
            }

            if($email.value.substr(0, 1) == '@' || $email.value.substr(0, 1) == '.' || $email.value.substr(-1) == '.' || $email.value.substr(-1) == '@' || $email.value.includes('@.')) {
                $emailValidation4.classList.add('ativo')
            } else {
                $emailValidation4.classList.remove('ativo')
            }

            if(!$email.value.includes('.') || !$email.value.includes('@') || $email.value.includes(' ') || $email.value.substr(0, 1) == '@' || $email.value.substr(0, 1) == '.' || $email.value.substr(-1) == '@' || $email.value.includes('@.') || $email.value.substr(-1) == '.') {
                $email.style.borderColor = 'red'
                $email.classList.add('ativo')         
            } else {
                $email.style.borderColor = 'rgba(0, 0, 0, 0.1)'
                $email.classList.remove('ativo')
            }
        } else {
            $emailValidation1.classList.remove('ativo')
            $emailValidation2.classList.remove('ativo')
            $emailValidation3.classList.remove('ativo')
            $emailValidation4.classList.remove('ativo')
            $email.style.borderColor = 'rgba(0, 0, 0, 0.1)'
            $email.classList.remove('ativo')
        }
    }
}