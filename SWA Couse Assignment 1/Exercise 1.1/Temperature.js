const Temperature = function(type, unit, time, place,value){
    const temperature = {}
    let wd = WeatherData(type,unit,time,place,value);
    Object.assign(temperature, wd);
    temperature.value = value;

    temperature.convertToF = function(){

        if(temperature.unit == "C"){    
            temperature.unit = "F";
            temperature.value = temperature.value * 1.8;
        }
        
    },
    temperature.convertToC= function(){
        if(temperature.unit == "F"){
            temperature.unit = "C";
            temperature.value = temperature.value/1.8;
        }
    }

    return temperature;
}