function WeatherData(type, unit, time, place, value){
    Event.call(this, time, place);
    DataType.call(this, type, unit);
    this.value = value;
}
WeatherData.prototype ={
    getValue:function(){
        return this.value;
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

WeatherData.prototype = Object.create(WeatherData.prototype);
Object.assign(WeatherData.prototype, Event.prototype);
Object.assign(WeatherData.prototype, DataType.prototype);