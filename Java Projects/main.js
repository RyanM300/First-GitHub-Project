document.querySelector('#cod').onclick = modern
document.querySelector('#fort').onclick = nite
document.querySelector('#rocket').onclick = leauge
document.querySelector('#ring').onclick = elden
document.querySelector('#madden').onclick = nfl
document.querySelector('#nhl').onclick = hockey

function modern() {
    document.querySelector('video').src= "../Videos/remastered.mp4"
    document.querySelector('h1').style.color = "white"
}
function nite() {
    document.querySelector('video').src="../Videos/workingfort.mp4"
    document.querySelector('h1').style.color = "white"
}
function leauge() {
    document.querySelector('video').src= "../Videos/rocket.mp4"
    document.querySelector('h1').style.color = "white"
}
function elden() {
    document.querySelector('video').src= "../Videos/workingeldenring.mp4"
    document.querySelector('h1').style.color = "white"
}
function nfl() {
    document.querySelector('video').src= "../Videos/workingmadden.mp4"
    document.querySelector('h1').style.color = "white"
}
function hockey() {
    document.querySelector('video').src= "../Videos/workingnhl.mp4"
    document.querySelector('h1').style.color = "white"
}