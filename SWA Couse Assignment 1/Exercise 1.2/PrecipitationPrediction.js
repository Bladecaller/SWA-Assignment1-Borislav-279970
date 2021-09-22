function PrecipitationPrediction(unit, time, place, number, data, value){
    WeatherPrediction.call(this, "Precipitation", unit, time, place, number, data);
    this.value = value;
}

PrecipitationPrediction.prototype ={
    matches:function(data){
        if(data.getTime()==this.getTime()&&data.getType()==this.getType()
        &&data.getPlace()==this.getPlace()&&data.getUnit()==this.getUnit()){
            return true;
        }else{
            return false;
        }
    },

    getExpectedTypes:function(){
        return ["Inch", "MM"];
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

PrecipitationPrediction.prototype = Object.create(PrecipitationPrediction.prototype);
Object.assign(PrecipitationPrediction.prototype, WeatherPrediction.prototype);