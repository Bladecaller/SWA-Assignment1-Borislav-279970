const WeatherPrediction = function(type, unit, time, place, number, data){
    const weatherPrediction = {};
    let tempEvent = Event(time,place);
    let tempData = DataType(type,unit);
    weatherPrediction.number = number;
    weatherPrediction.data = data;
    Object.assign(weatherPrediction,tempData);
    Object.assign(weatherPrediction, tempEvent);
    
    weatherPrediction.getMax = function(){
        let max = 0;
        for (let i = 0; i < weatherPrediction.data.lenght; i++){
            if (max < i){
                max = i;
            }
        }
        return max;
    },

    weatherPrediction.getMin = function(){
        let min = 100;
        for (let i = 0; i < weatherPrediction.data.lenght; i++){
            if (min > i){
                min = i;
            }
        }
        return min;
    },
    weatherPrediction.matches = function(data){
        if(data.getTime()==weatherPrediction.getTime()&&data.getType()==weatherPrediction.getType()
        &&data.getPlace()==weatherPrediction.getPlace()&&data.getUnit()==weatherPrediction.getUnit()){
            return true;
        }else{
            return false;
        }
    }
    return weatherPrediction;
}
