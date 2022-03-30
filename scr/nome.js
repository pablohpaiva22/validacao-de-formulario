export default function nome() {
    const $name = document.querySelector('input[type="text"]')
    const $nameValidation1 = document.querySelector('.nameValidation1')

    $name.addEventListener('blur', handleBlur)

    function handleBlur() {
        if($name.value == '') {
            $nameValidation1.classList.add('ativo')
            $name.style.borderColor = 'red'
        } else {
            $nameValidation1.classList.remove('ativo')
            $name.style.borderColor = 'rgba(0, 0, 0, 0.1)'
        }
    }
    
    $name.addEventListener('keyup', handleKeyUp)
    
    function handleKeyUp() {
        if($name.value !== '')
        $nameValidation1.classList.remove('ativo')
        $name.style.borderColor = 'rgba(0, 0, 0, 0.1)'
    }
}
