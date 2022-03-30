 export default function email() {
    const $email = document.querySelector('input[type="email"]')

    const $campoEmail = document.querySelector('.campoEmail')
    const $pontoArrobaEmail = document.querySelector('.pontoArrobaEmail')
    const $arrobaEmail = document.querySelector('.arrobaEmail')
    const $espacoEmail = document.querySelector('.espacoEmail')
    const $invalidoEmail = document.querySelector('.invalidoEmail')

    const regexp2 = /@\w+\./g

    $email.addEventListener('blur', handleBlur)

    function handleBlur() {
        if($email.value == '') {
            $campoEmail.classList.add('ativo')
            $email.style.borderColor = 'red'
            $email.classList.add('ativo')
            $email.addEventListener('keyup', handleKeyUp)
        } else {
            $campoEmail.classList.remove('ativo')
            handleKeyUp()
            $email.addEventListener('keyup', handleKeyUp)
        }
    }

    function handleKeyUp() {
        if($email.value.length !== 0) {
            if($email.value.match(regexp2) == null) {
                $pontoArrobaEmail.classList.add('ativo')
            } else {
                $pontoArrobaEmail.classList.remove('ativo')
            }

            if(!$email.value.includes('@')) {
                $arrobaEmail.classList.add('ativo')
            } else {
                $arrobaEmail.classList.remove('ativo')
            }
            
            if($email.value.includes(' ')) {
                $espacoEmail.classList.add('ativo')
            } else {
                $espacoEmail.classList.remove('ativo')
            }
            
            if($email.value.substr(-1) == '@' || $email.value.substr(0, 1) == '@' || $email.value.substr(-1) == '.' || $email.value.substr(0, 1) == '.' || $email.value.includes('@.')) {
                $invalidoEmail.classList.add('ativo')
            } else {
                $invalidoEmail.classList.remove('ativo')
            }
            
            if($email.value.match(regexp2) == null || !$email.value.includes('@') || $email.value.includes(' ') || $email.value.substr(0, 1) == '@' || $email.value.substr(0, 1) == '.' || $email.value.substr(-1) == '.' || $email.value.substr(-1) == '@' || $email.value.includes('@.')) {
                $email.style.borderColor = 'red'
                $email.classList.add('ativo')
            } else {
                $email.style.borderColor = 'rgba(0, 0, 0, 0.1)'
                $email.classList.remove('ativo')
            }
        } else {
            $campoEmail.classList.remove('ativo')
            $pontoArrobaEmail.classList.remove('ativo')
            $arrobaEmail.classList.remove('ativo')
            $espacoEmail.classList.remove('ativo')
            $invalidoEmail.classList.remove('ativo')
            $email.style.borderColor = 'rgba(0, 0, 0, 0.1)'
            $email.classList.remove('ativo')
        }
    }
}
