const CloudPrediction = function(unit, time, place, number, data, value){
    const cloud = {};
    let WP = WeatherPrediction("cloud", unit, time, place, number, data);
    Object.assign(cloud,WP);
    cloud.value = value;
    
    cloud.matches = function(data){
        if(data.getTime()==cloud.getTime()&&data.getType()==cloud.getType()
        &&data.getPlace()==cloud.getPlace()&&data.getUnit()==cloud.getUnit()){
            return true;
        }else{
            return false;
        }
    },

    cloud.getExpectedTypes =function(){
        return ["North", "West", "South", "East"];
    },

    cloud.geExpectedResult = function(){

        if(cloud.value < 20){    
            cloud.unit = "A storm is unlikely to occur";
        }else{
            cloud.unit - "A storm is likely to occur";
        } 
    }
    return cloud;
}