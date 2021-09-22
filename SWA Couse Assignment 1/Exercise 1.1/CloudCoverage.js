const CloudCoverage = function(type, unit, time, place,value){
    const cloud = {};
    let wd = WeatherData(type,unit,time,place,value);
    Object.assign(cloud,wd);
    cloud.value = value;

    cloud.setExpectedResult = function(){
        if(cloud.value < 20){    
            cloud.unit = "A storm is unlikely to occur";
        }else{
            cloud.unit - "A storm is likely to occur";
        }
    }
    return cloud;
}