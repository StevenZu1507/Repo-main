let btnReset = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnReset.addEventListener('click', () => {

inputs.forEach(input => input.value = '');
});