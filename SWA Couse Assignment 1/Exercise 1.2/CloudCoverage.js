function CloudCoverage(unit, time, place, value){
    WeatherData.call(this, "Temperature", unit, time, place, value);
    this.value = value;
}
CloudCoverage.prototype = {
    setExpectedResult:function(){

        if(this.value < 20){    
            this.unit = "A storm is unlikely to occur";
        }else{
            this.unit - "A storm is likely to occur";
        }
        
    }
}
CloudCoverage.prototype = Object.create(CloudCoverage.prototype);
Object.assign(CloudCoverage.prototype, WeatherData.prototype);