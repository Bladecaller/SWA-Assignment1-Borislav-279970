const WindPrediction = function(unit, time, place, number, data, direction, value){
    const wind = {};
    let WP = WeatherPrediction("Wind", unit, time, place, number, data);
    Object.assign(wind,WP);
    wind.direction = direction;
    wind.value = value;

    wind.matches = function(data){
        if(data.getTime()==wind.getTime()&&data.getType()==wind.getType()
        &&data.getPlace()==wind.getPlace()&&data.getUnit()==wind.getUnit()){
            return true;
        }else{
            return false;
        }
    },

    wind.getExpectedTypes = function(){
        return ["North", "West", "South", "East"];
    },

    wind.convertToMPH = function(){

        if(wind.unit == "MS"){    
            wind.unit = "MPH";
            wind.value = wind.value * 2.24;
        }
        
    },
    wind.convertToMS = function(){
        if(wind.unit == "MPH"){
            wind.unit = "MS";
            wind.value = wind.value / 2.24;
        }
    }
    return wind;
}