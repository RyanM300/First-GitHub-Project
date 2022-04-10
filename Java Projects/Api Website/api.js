document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data.photos[0].img_src)
        document.querySelector('img').src = data.photos[0].img_src
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}                