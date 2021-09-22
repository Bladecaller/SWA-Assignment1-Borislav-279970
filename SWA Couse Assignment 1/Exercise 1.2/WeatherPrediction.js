function WeatherPrediction(type, unit, time, place, number, data){
    Event.call(this, time, place);
    DataType.call(this, type, unit);
    this.number = number;
    this.data = data;
}

WeatherPrediction.prototype = {
    getMax:function(){
        let max = 0;
        for (let i = 0; i < this.data.lenght; i++){
            if (max < i){
                max = i;
            }
        }
        return max;
    },

    getMin:function(){
        let min = 100;
        for (let i = 0; i < this.data.lenght; i++){
            if (min > i){
                min = i;
            }
        }
        return min;
    },
    matches:function(data){
        if(data.getTime()==this.getTime()&&data.getType()==this.getType()
        &&data.getPlace()==this.getPlace()&&data.getUnit()==this.getUnit()){
            return true;
        }else{
            return false;
        }
    }
}

WeatherPrediction.prototype = Object.create(WeatherPrediction.prototype);
Object.assign(WeatherPrediction.prototype, Event.prototype);
Object.assign(WeatherPrediction.prototype, DataType.prototype);