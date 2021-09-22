function Precipitation(unit, time, place, value){
    WeatherData.call(this, "Precipitation", unit, time, place, value);
    this.value = value
}
Precipitation.prototype = {
    getPrecipationType:function(){
        return this.getType;
    },

    convertToInch:function(){

        if(this.unit == "MM"){    
            this.unit = "Inch";
            this.value = this.value * 0.0393700787;
        }
        
    },
    convertToMM:function(){
        if(this.unit == "Inch"){
            this.unit = "MM";
            this.value = this.value/0.0393700787;
        }
    }
}
Precipitation.prototype = Object.create(Precipitation.prototype);
Object.assign(Precipitation.prototype, WeatherData.prototype);