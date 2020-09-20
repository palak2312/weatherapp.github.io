const weatherapi ={
    key: "c62b948d4e594e99066073f5142b67db",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"

}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

// c62b948d4e594e99066073f5142b67db

const cityname= document.getElementById('cityname1');

cityname.addEventListener('keypress', (event) => {

    if(event.keyCode == 13)
    {
        console.log(cityname.value);
        getWheatherReport(cityname.value);
        document.querySelector('.weatherbody').style.display="block";
    }

});

function getWheatherReport(city){
    fetch(`${weatherapi.baseUrl}?q=${city}&appid=${weatherapi.key}&units=metric`)
     .then(weather => {
          return weather.json();

     }).then(showWeatherReport);

}

function showWeatherReport(weather){
    console.log(weather);
    let city= document.querySelector('.city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temp= document.querySelector('.temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    
    let minmax= document.querySelector('.min-max');
    minmax.innerHTML=`${Math.round(weather.main.temp_min)}&deg;C (min) / ${Math.round(weather.main.temp_max)}&deg;C (max)`;

    let weathertype= document.querySelector('.weather');
    weathertype.innerText=`${weather.weather[0].main}`;

    let date=document.querySelector('.date');
    let todaydate=new Date();
    date.innerText=dateManage(todaydate);
    
    if(weathertype.textContent=="Clear")
    {
        document.body.style.backgroundImage="url('images/clear.jpg')";
    }
    else
    if(weathertype.textContent=="Clouds")
    {
        document.body.style.backgroundImage="url('images/clouds.jpg')";
    }
    else
    if(weathertype.textContent=="Rain")
    {
        document.body.style.backgroundImage="url('images/rains.jpg')";
    }
    else
    if(weathertype.textContent=="Snow")
    {
        document.body.style.backgroundImage="url('images/snow.jpg')";
    }
    else
    if(weathertype.textContent=="Sunny")
    {
        document.body.style.backgroundImage="url('images/sunny2.jpg')";
    }
    else
    if(weathertype.textContent=="Thunderstorm")
    {
        document.body.style.backgroundImage="url('images/thunderstorm.jpg')";
    }
    else
    if(weathertype.textContent=="Haze")
    {
        document.body.style.backgroundImage="url('images/haze.jpg')";
    }
    else
    {
        document.body.style.backgroundImage="url('images/mist.jpg')";
    }
    


}

function dateManage(todaydate){
     let days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
      let y=['January','February','March','April','May','June','July','August','September','October','November','Decemeber'];
    let year=todaydate.getFullYear();
    let month=y[todaydate.getMonth()];
    let day=days[todaydate.getDay()];
    let date=todaydate.getDate();

    return `${date} ${month} (${day}), ${year}`; 
}


