function Wind(unit, time, place, value, direction){
    WeatherData.call(this, "Wind", unit, time, place, value);
    this.value = value;
    this.direction = direction
}
Wind.prototype = {
    getDirection:function(){
        return this.direction;
    },

    convertToMPH:function(){

        if(this.unit == "MS"){    
            this.unit = "MPH";
            this.value = this.value * 2.24;
        }
        
    },
    convertToMS:function(){
        if(this.unit == "MPH"){
            this.unit = "MS";
            this.value = this.value / 2.24;
        }
    }
}
Wind.prototype = Object.create(Wind.prototype);
Object.assign(Wind.prototype, WeatherData.prototype);