document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto() {
    let search = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=fMVaDz87DNEZ7ao5gJ19tvzrP28ttbqZn9qFIcTW&date=${search}`
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.getElementById('description').style.visibility = "visible"
        document.getElementById('description').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}                