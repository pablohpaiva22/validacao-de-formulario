export default function nome() {
    const $nome = document.querySelector('input[type="text"]')
    const $campoNome = document.querySelector('.campoNome')

    $nome.addEventListener('blur', handleBlur)

    function handleBlur() {
        if($nome.value == '') {
            $campoNome.classList.add('ativo')
            $nome.style.borderColor = 'red'
            $nome.classList.add('ativo')
        } else {
            $campoNome.classList.remove('ativo')
            $nome.style.borderColor = 'rgba(0, 0, 0, 0.1)'
        }
    }
    
    $nome.addEventListener('keyup', handleKeyUp)
    
    function handleKeyUp() {
        if($nome.value.length > 0) {
            $campoNome.classList.remove('ativo')
            $nome.classList.remove('ativo')
            $nome.style.borderColor = 'rgba(0, 0, 0, 0.1)'
        }
    }
}
