const PrecipitationPrediction = function(unit, time, place, number, data, value){
    const precipitation = {};
    let WP = WeatherPrediction("Precipitation", unit, time, place, number, data);
    Object.assign(precipitation,WP);
    precipitation.value = value;

    precipitation.matches = function(data){
        if(data.getTime()==precipitation.getTime()&&data.getType()==precipitation.getType()
        &&data.getPlace()==precipitation.getPlace()&&data.getUnit()==precipitation.getUnit()){
            return true;
        }else{
            return false;
        }
    },

    precipitation.getExpectedTypes = function(){
        return ["Inch", "MM"];
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