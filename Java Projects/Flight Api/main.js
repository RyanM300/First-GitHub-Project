const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'adsbexchange-com1.p.rapidapi.com',
		'X-RapidAPI-Key': '974bd8863emshe26d5132d5ea91bp1489d7jsn454517345fc9'
	}
};

document.querySelector('.sendIt').addEventListener('click', getPlanes)

function getPlanes() {
    let lati = document.querySelector('#latitude').value
    let longi = document.querySelector('#longitude').value

        fetch(`https://adsbexchange-com1.p.rapidapi.com/v2/lat/${lati}/lon/${longi}/dist/100/`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err)
        );
}