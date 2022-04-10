document.querySelector('button').addEventListener('click', getPhoto)
let search = document.querySelector('input').value

function getPhoto() {
    let search = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?date= + ${search}`
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data.hdurl)
        document.querySelector('img').src = data.hdurl
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}                