//variables
constgeneralBtn = document.getElementById('general');
constbusinessBtn = document.getElementById('business');
constsportsBtn = document.getElementById('sports');
consttechnologyBtn = document.getElementById('technology');
constentertainmentBtn = document.getElementById('entertainment');
constsearchBtn = document.getElementById('searchBtn');
constnewsQuery = document.getElementById('newsQuery');
constnewsType = document.getElementById('newsType');
constnewsdetails = document.getElementById('newsdetails');


//Array
varnewDataArr = [];

//apis

constAPI_KEY = "783fbc48c6334623b72e26b46af4f95c";
constHEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
constGENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
constBUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
constSPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=";
constENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
constTECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
constSEARCH_NEWS = "https://newsapi.org/v2/everything?q=";


generalBtn.addEventListener('click', function () {
    fetchGeneralNews();
})
businessBtn.addEventListener('click', function () {
    fetchGBusinessNews();
})
sportsBtn.addEventListener('click', function () {
    fetchSportsNews();
})
technologyBtn.addEventListener('click', function () {
    fetchTechnologyNews();
})
entertainmentBtn.addEventListener('click', function () {
    fetchEntertainmentNews();
})

searchBtn.addEventListener('click', function () {
    fetchQueryNews();
})


constfetchGeneralNews = async () => {
    constresponse = await fetch(GENERAL_NEWS + API_KEY)
    console.log(await response.json());
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        constmyJson = await response.json();
        consolel.log(myJson);
        newDataArr = myJson;
    }
    else {
        //Printerrormessage
        console.log(response.status, response.statusText);

    }

    displayNews();
}


constfetchGBusinessNews = async () => {
    constresponse = await fetch(BUSINESS_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        constmyJson = awaitresponse.json();
        newDataArr = myJson;
    }
    else {
        //Printerrormessage
        console.log(response.status, response.statusText);

    }

    displayNews();
}


constfetchSportsNews = async () => {
    constresponse = await fetch(SPORTS_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        constmyJson = awaitresponse.json();
        newDataArr = myJson;
    }
    else {
        //Printerrormessage
        console.log(response.status, response.statusText);

    }

    displayNews();
}

constfetchTechnologyNews = async () => {
    constresponse = await fetch(TECHNOLOGY_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        constmyJson = awaitresponse.json();
        newDataArr = myJson;
    }
    else {
        //Printerrormessage
        console.log(response.status, response.statusText);

    }

    displayNews();
}

constfetchEntertainmentNews = async () => {
    constresponse = await fetch(ENTERTAINMENT_NEWS + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        constmyJson = await response.json();
        newDataArr = myJson;
    }
    else {
        //Printerrormessage
        console.log(response.status, response.statusText);

    }

    displayNews();
}

constfetchQueryNews = async () => {
    constresponse = await fetch(SEARCH_NEWS + newsQuery.value + "&apiKey=" + API_KEY)
    newDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        constmyJson = await response.json();
        newDataArr = myJson;
    }
    else {
        //Printerrormessage
        console.log(response.status, response.statusText);
    }

    displayNews();
}


cloud_pct3.innerHTML = response.cloud_pct
			temp3.innerHTML = response.temp
			feels_like3.innerHTML = response.feels_like
			humidity3.innerHTML = response.humidity
			min_temp3.innerHTML = response.min_temp
			max_temp3.innerHTML = response.max_temp
			wind_speed3.innerHTML = response.wind_speed
			wind_degrees3.innerHTML = response.wind_degrees
			sunrise3.innerHTML = response.sunrise
			sunset3.innerHTML = response.sunset

			cloud_pct4.innerHTML = response.cloud_pct
			temp4.innerHTML = response.temp
			feels_like4.innerHTML = response.feels_like
			humidity4.innerHTML = response.humidity
			min_temp4.innerHTML = response.min_temp
			max_temp4.innerHTML = response.max_temp
			wind_speed4.innerHTML = response.wind_speed
			wind_degrees4.innerHTML = response.wind_degrees
			sunrise4.innerHTML = response.sunrise
			sunset4.innerHTML = response.sunset

			cloud_pct5.innerHTML = response.cloud_pct
			temp5.innerHTML = response.temp
			feels_like5.innerHTML = response.feels_like
			humidity5.innerHTML = response.humidity
			min_temp5.innerHTML = response.min_temp
			max_temp5.innerHTML = response.max_temp
			wind_speed5.innerHTML = response.wind_speed
			wind_degrees5.innerHTML = response.wind_degrees
			sunrise5.innerHTML = response.sunrise
			sunset5.innerHTML = response.sunset

			cloud_pct6.innerHTML = response.cloud_pct
			temp6.innerHTML = response.temp
			feels_like6.innerHTML = response.feels_like
			humidity6.innerHTML = response.humidity
			min_temp6.innerHTML = response.min_temp
			max_temp6.innerHTML = response.max_temp
			wind_speed6.innerHTML = response.wind_speed
			wind_degrees6.innerHTML = response.wind_degrees
			sunrise6.innerHTML = response.sunrise
			sunset6.innerHTML = response.sunset
