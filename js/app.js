// Tu código aquí
const button = document.querySelector('#btn')

button.addEventListener('click', changeHex)

function changeHex() {

    var hex = Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = "#" + hex

}