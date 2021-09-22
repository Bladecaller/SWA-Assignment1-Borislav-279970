const TemperaturePrediction = function(unit, time, place, number, data, value){
    const tempPrediction = {};
    let WP = WeatherPrediction("Temperature", unit, time, place, number, data);
    Object.assign(tempPrediction,WP);
    tempPrediction.value = value;

    tempPrediction.convertToF = function(){

        if(tempPrediction.unit == "C"){    
            tempPrediction.unit = "F";
            tempPrediction.value = tempPrediction.value * 1.8;
        }
        
    },
    tempPrediction.convertToC = function(){
        if(tempPrediction.unit == "F"){
            tempPrediction.unit = "C";
            tempPrediction.value = tempPrediction.value/1.8;
        }
    }
    return tempPrediction;
}