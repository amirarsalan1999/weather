let backGroundList = ["Url('./img/1.avif')", "Url('./img/2.avif')", "Url('./img/3.avif')", "Url('./img/4.avif')", "Url('./img/5.jpg')"];
let backGroundIndex = Math.floor(Math.random() * backGroundList.length);
(function(){
    document.getElementById("content").style.backgroundImage = backGroundList[backGroundIndex];
}())
let city = [
    {nameCityC : "Tehran", nameCityS : "tehran", title : "Weather in Tehran", temperature : "38&#176C", status : "Sunny", humidity : "26%", windSpeed : "32 km/h"},
    {nameCityC : "Shiraz", nameCityS : "shiraz", title : "Weather in Shiraz", temperature : "34&#176C", status : "cloudy", humidity : "15%", windSpeed : "53 km/h"},
    {nameCityC : "Mashhad", nameCityS : "mashhad", title : "Weather in Mashhad", temperature : "30&#176C", status : "windy", humidity : "21%", windSpeed : "87 km/h"},
    {nameCityC : "Tabriz", nameCityS : "tabriz", title : "Weather in Tabriz", temperature : "15&#176C", status : "Rainy", humidity : "11%", windSpeed : "40 km/h"},
    {nameCityC : "Rasht", nameCityS : "rasht", title : "Weather in Rasht", temperature : "20&#176C", status : "Sunny", humidity : "19%", windSpeed : "20 km/h"},
]
let inputValue = document.querySelector("input");
let cityInfo;




function showWeather () {
    cityInfo = city.find(function (item) {
        return item.nameCityC === inputValue.value || item.nameCityS === inputValue.value; 
    })
    if(cityInfo){
    document.getElementById("loading").innerHTML = "";
    document.getElementById("item1").innerHTML = cityInfo.title;
    document.getElementById("item2").innerHTML = cityInfo.temperature;
    document.getElementById("item3").innerHTML = "Status : " + cityInfo.status;
    document.getElementById("item4").innerHTML = "Humidity : " + cityInfo.humidity;
    document.getElementById("item5").innerHTML = "Windspeed" + cityInfo.windSpeed;
    }
    else{
        document.getElementById("textDialog").innerHTML = "شهر وارد شده در دسترس نیست";
        document.getElementById("dialog").style.padding = "2rem";
        document.getElementById("dialog").classList.add("dialogShow");
        setTimeout(() => {
            document.getElementById("dialog").classList.add("dialogHidden");
        }, 3000);
    }
}