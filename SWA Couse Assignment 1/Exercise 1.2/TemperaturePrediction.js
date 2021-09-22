function TemperaturePrediction(unit, time, place, number, data, value){
    WeatherPrediction.call(this, "Temperature", unit, time, place, number, data);
    this.value = value;
}

TemperaturePrediction.prototype = {

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

TemperaturePrediction.prototype = Object.create(TemperaturePrediction.prototype);
Object.assign(TemperaturePrediction.prototype, WeatherPrediction.prototype);