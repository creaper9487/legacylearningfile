let cityData = [{ name: "", lat: "", lon: "" },
    { name: "台北", lat: 25.0856513, lon: 121.421409 },
    { name: "台中", lat: 24.1852333, lon: 120.4946381 },
    { name: "高雄", lat: 22.7000444, lon: 120.0508691 },
    { name: "Mozambique" , lat:-25.95, lon:32.583333},
    { name: "Current"}
                ];
let nowLocation;
let fetchComplete = false;
$(function () {
    for (let x = 0; x < cityData.length; x++) {
        $("#citySelect").append(
            `<option value='${x}'>${cityData[x].name}</option>`);
    }
    $("#citySelect").on("change", function(){
        if(this.value==cityData.length-1){
            getLocation();
        }else loadServerData(this.value);
    });
});
function getLocation(){
    if(navigator.geolocation==undefined){
        alert("Location Getting Failed");
        return;
    }
    let settings ={enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(result, error, settings);
    loadServerData(cityData.length-1)
}
function result(position){nowLocation=position.coords; cityData[cityData.length-1].lat=nowLocation.latitude;cityData[cityData.length-1].lon=nowLocation.longitude}
function error(err){alert(err);}
function displayLocAck(){

}
function loadServerData(flag) {
    // console.log(cityData[this.value].name); 
    $("#result").empty();
    if(flag==0)return;

    let api="https://api.openweathermap.org/data/2.5/weather?";
    let key="c84ca0115eaad28b01124b707a01360b";
    $.getJSON(api,{
        lat:cityData[flag].lat,
        lon:cityData[flag].lon,
        appid:key,
        units:"metric",
        lang:"zh_tw"
    })
    .done(function(data){
    $("#result").append(`<p>溫度:${data.main.temp_min}~${data.main.temp_max}</p>`);
    $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>
                        ${data.weather[0].description}</p>`);    
    })
    .fail
    .always
}