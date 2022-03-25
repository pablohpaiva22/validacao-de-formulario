 export default function email() {
    const $email = document.querySelector('input[type="email"]')
    const $emailValidation2 = document.querySelector('.emailValidation2')
    const $emailValidation3 = document.querySelector('.emailValidation3')

    $email.addEventListener('keyup', handleKeyUp)

    function handleKeyUp() {
        const check = $email.value.includes(' ')
        console.log(check)

        if(!$email.value.includes('@') && $email.value !== '') {
            $email.style.borderColor = 'red'
            $emailValidation2.classList.add('ativo')
            $email.classList.add('ativo')
        } else {
            $emailValidation2.classList.remove('ativo')
            $email.style.borderColor = 'rgba(0, 0, 0, 0.1)'
            $emailValidation3.classList.remove('ativo')
            $email.classList.remove('ativo')
        }

        if($email.value.includes(' ')) {
            $email.style.borderColor = 'red'
            $emailValidation3.classList.add('ativo')
            $email.classList.add('ativo')
        } else if(!$email.value.includes(' ') && $email.value.includes('@') ){
            $emailValidation3.classList.remove('ativo')
            $email.style.borderColor = 'rgba(0, 0, 0, 0.1)'
        }
    }
}