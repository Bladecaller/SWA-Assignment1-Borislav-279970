function CloudCoveragePrediction(unit, time, place, number, data, value){
    WeatherPrediction.call(this, "Cloud", unit, time, place, number, data);
    this.value = value;
}

CloudCoveragePrediction.prototype = {
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

    geExpectedResult:function(){

        if(this.value < 20){    
            this.unit = "A storm is unlikely to occur";
        }else{
            this.unit - "A storm is likely to occur";
        }
        
    }
}
CloudCoveragePrediction.prototype = Object.create(CloudCoveragePrediction.prototype);
Object.assign(CloudCoveragePrediction.prototype, WeatherPrediction.prototype);