document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
    const url = 'https://api.nasa.gov/planetary/apod?api_key=fMVaDz87DNEZ7ao5gJ19tvzrP28ttbqZn9qFIcTW'
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