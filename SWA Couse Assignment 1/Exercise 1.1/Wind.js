const Wind = function(type, unit, time, place, direction, value){
    const wind = {};
    let wd = WeatherData(type,unit,time,place,value);
    wind.value = value;
    wind.direction = direction;
    Object.assign(wind,wd);

    wind.getDirection = function(){
        return wind.direction;
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