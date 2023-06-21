// async function weatherApi() {
// 	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'bd00fa80b8msh3771382c2c3c79ep1b3e74jsn63c6f7ae0a3c',
// 			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 		}
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();

// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// weatherApi()

// const temp = document.getElementById('temp')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd00fa80b8msh3771382c2c3c79ep1b3e74jsn63c6f7ae0a3c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city, options)
		.then(response => response.json())
		.then((response) => {
			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			console.log(response)
		})
		.catch(err => console.log(err))

}

submit.addEventListener("click", (event) => {
	event.preventDefault();
	getWeather(city.value)
})

getWeather('Bhadohi')