export default function senha() {
    const $senha = document.querySelector('input[type="password"]')
    const $password = document.querySelector('input[type="password"]')
    const $passValidation = document.querySelector('.passValidation')
    const $passValidation1 = document.querySelector('.passValidation1')

    $senha.addEventListener('blur', handleBlur)

    function handleBlur() {
        if($senha.value == '') {
            $passValidation.classList.add('ativo')
            $password.style.borderColor = 'red'
        } else if($senha.value.length < 6) {
            $passValidation1.classList.add('ativo')
            $password.style.borderColor = 'red'
            $passValidation.classList.remove('ativo')
        } else {
            $passValidation.classList.remove('ativo')
            $passValidation1.classList.remove('ativo')
            $password.style.borderColor = 'rgba(0, 0, 0, 0.1)'
            $senha.addEventListener('keyup', handleKeyUp)
        }
    }

    function handleKeyUp() {
        if($senha.value.length < 6) {
            $passValidation1.classList.add('ativo')
            $password.style.borderColor = 'red'
        } else {
            $passValidation1.classList.remove('ativo')
        }
    }
}

