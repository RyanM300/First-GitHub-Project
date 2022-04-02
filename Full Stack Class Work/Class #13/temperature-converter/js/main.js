//Write your pseduo code first! 
document.querySelector('#button').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#temp').value
    temp = temp - 32 / 0.5556
    document.querySelector('#result').innerText = temp
}