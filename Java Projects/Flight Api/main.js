const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'adsbexchange-com1.p.rapidapi.com',
		'X-RapidAPI-Key': '974bd8863emshe26d5132d5ea91bp1489d7jsn454517345fc9'
	}
};

fetch('https://adsbexchange-com1.p.rapidapi.com/v2/lat/51.46888/lon/-0.45536/dist/10/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));