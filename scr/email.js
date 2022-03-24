 export default function email() {
    const $email = document.querySelector('input[type="email"]')
    const $emailValidation2 = document.querySelector('.emailValidation2')

    $email.addEventListener('keyup', handleKeyUp)

    function handleKeyUp() {
        if(!$email.value.includes('@') && $email.value !== '') {
            $email.style.borderColor = 'red'
            $emailValidation2.classList.add('ativo')
            $email.classList.add('ativo')
        } else {
            $emailValidation2.classList.remove('ativo')
            $email.style.borderColor = 'rgba(0, 0, 0, 0.1)'
            $email.classList.remove('ativo')
        }
    }
}