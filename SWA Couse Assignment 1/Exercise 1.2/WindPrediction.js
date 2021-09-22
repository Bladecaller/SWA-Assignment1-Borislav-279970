function WindPrediction(unit, time, place, number, data, direction, value){
    WeatherPrediction.call(this, "Wind", unit, time, place, number, data);
    this.direction = direction;
    this.value = value;
}

WindPrediction.prototype = {
    matches:function(data){
        if(data.getTime()==this.getTime()&&data.getType()==this.getType()
        &&data.getPlace()==this.getPlace()&&data.getUnit()==this.getUnit()){
            return true;
        }else{
            return false;
        }
    },

    getExpectedTypes:function(){
        return ["North", "West", "South", "East"];
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
WindPrediction.prototype = Object.create(WindPrediction.prototype);
Object.assign(WindPrediction.prototype, WeatherPrediction.prototype);