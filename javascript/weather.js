api_key='d6b62375fafdeca5a176093107639ac8'


function onGeoOk(postion){
    const Lat=postion.coords.latitude;
    const Lon=postion.coords.longitude;
    url=`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=${api_key}&units=metric`
    fetch(url).then((response)=> response.json()).then((data)=>{
        const weather=document.querySelector("#weather_span span:last-child")
        const city= document.querySelector("#weather_span span:first-child")
        city.innerText=data.name
        weather.innerText="/"+data.weather[0].main
    })
}

function onGeoError(){
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)