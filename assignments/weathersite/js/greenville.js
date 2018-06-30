var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?zip=29601,us&appid=22ee2c6f5e22b73da67f53810550fb5d&units=imperial', true);

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