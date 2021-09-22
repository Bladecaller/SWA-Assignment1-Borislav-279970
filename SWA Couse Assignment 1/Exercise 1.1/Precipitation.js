const Precipitation = function(type, unit, time, place,value){
    const precipitation = {};
    let wd = WeatherData(type,unit,time,place,value);
    Object.assign(precipitation, wd);
    precipitation.value = value;

    precipitation.getPrecipationType = function(){
        return precipitation.getType;
    },

    precipitation.convertToInch = function(){

        if(precipitation.unit == "MM"){    
            precipitation.unit = "Inch";
            precipitation.value = precipitation.value * 0.0393700787;
        }
        
    },

    precipitation.convertToMM = function(){
        if(precipitation.unit == "Inch"){
            precipitation.unit = "MM";
            precipitation.value = precipitation.value/0.0393700787;
        }
    }

    return precipitation;
}