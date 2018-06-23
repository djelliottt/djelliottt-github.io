var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=83237,us&appid=5d2cd33f5078110e5e2d1c2277c23a90&units=imperial', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('hightemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowtemp').innerHTML =  weatherInfo.main.temp_min;
    document.getElementById('wspeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('weadesc').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('currtemp').innerHTML = weatherInfo.main.temp;
    
var iconcode = weatherInfo.weather[0].icon;
var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
document.getElementById('weather_icon').src = icon_path;
    
}//end of the function.