function Temperature(unit, time, place, value){
    WeatherData.call(this, "Temperature", unit, time, place, value);
    this.value = value;
}
Temperature.prototype = {
    
    convertToF:function(){

        if(this.unit == "C"){    
            this.unit = "F";
            this.value = this.value * 1.8;
        }
        
    },
    convertToC:function(){
        if(this.unit == "F"){
            this.unit = "C";
            this.value = this.value/1.8;
        }
    }
}
Temperature.prototype = Object.create(Temperature.prototype);
Object.assign(Temperature.prototype, WeatherData.prototype);