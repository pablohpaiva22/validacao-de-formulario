export default function checkbox() {

    const $checkbox = document.querySelector('input[type="checkbox"]')
    const $checkboxValidation = document.querySelector('.checkboxValidation')

    $checkbox.addEventListener('change', handleChange)

    function handleChange() {
        if($checkbox.checked) {
            $checkboxValidation.classList.remove('ativo')
        } else {
            $checkboxValidation.classList.add('ativo')
        }
    }
}
