const inputs = document.querySelector('.inputs')

inputs.addEventListener('input', function (e) {
  let value = e.target.value
  if (isNaN(value)) {
    target.value = ''
    return
  }
  if (value != '') {
    const next = e.target.nextElementSibling
    if (next) {
      next.focus()
    }
  }
})
/* inputs.addEventListener('click', (e) => {
  console.log(e.target.className)
}) */
inputs.addEventListener('keyup', function (e) {
  const target = e.target
  const key = e.key.toLowerCase()

  if (key == 'backspace' || key == 'delete') {
    target.value = ''
    const previous = target.previousElementSibling
    if (previous) previous.focus()
  }
})
