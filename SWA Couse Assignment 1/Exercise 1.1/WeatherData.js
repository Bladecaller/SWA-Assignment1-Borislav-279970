const WeatherData = function(type, unit, time, place, value){
    const weatherData = {};
    let tempEvent = Event(time,place);
    let tempData = DataType(type,unit);
    weatherData.value = value;
    Object.assign(weatherData, tempData);
    Object.assign(weatherData, tempEvent);

    weatherData.getValue = function(){
        return weatherData.value;
    },

    weatherData.matches = function(data){
        if(data.getTime()==weatherData.getTime()&&data.getType()==weatherData.getType()
        &&data.getPlace()==weatherData.getPlace()&&data.getUnit()==weatherData.getUnit()){
            return true;
        }else{
            return false;
        }
    }

    return weatherData;
}