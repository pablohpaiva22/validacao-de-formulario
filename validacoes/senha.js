export default function senha() {
    const $senha = document.querySelector('input[type="password"]')
    const $campoSenha = document.querySelector('.campoSenha')
    const $digitosSenha = document.querySelector('.digitosSenha')

    $senha.addEventListener('blur', handleBlur)

    function handleBlur() {
        if($senha.value.length === 0) {
            $senha.style.borderColor = 'red'
            $senha.classList.add('ativo')
            $campoSenha.classList.add('ativo')
        } else if($senha.value.length > 0 && $senha.value.length < 6) {
            $campoSenha.classList.remove('ativo')
            $digitosSenha.classList.add('ativo')
            $senha.style.borderColor = 'red'
            $senha.classList.add('ativo')
            $senha.addEventListener('keyup', handleKeyUp)
        } else {
            $senha.classList.remove('ativo')
            $senha.style.borderColor = 'rgba(0, 0, 0, 0.1)'
            $campoSenha.classList.remove('ativo')
            $digitosSenha.classList.remove('ativo')
        }
    }

    function handleKeyUp() {
        if($senha.value.length >= 6) {
            $digitosSenha.classList.remove('ativo')
            $senha.classList.remove('ativo')
        }
    }
}

