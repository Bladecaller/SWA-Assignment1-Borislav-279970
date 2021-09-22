const Event = function(time,place){
    const event = {};
    event.time = time;
    event.place = place;

    event.getTime = function(){
        return event.time;
    },

    event.getPlace= function(){
        return event.place;
    }

    return event;
};

//---------------------------------------------------------------------------------------------------
const DataType = function(type, unit){
    const dataType = {};
    dataType.type = type;
    dataType.unit = unit;

    dataType.getType= function(){
        return dataType.type;
    },

    dataType.getUnit = function(){
        return dataType.unit;
    }

    return dataType;

}
//--------------------------------------------------------------------------------------------------
const WeatherData = function(type, unit, time, place, value){
    const weatherData = {};
    let tempEvent = Event(time,place);
    let tempData = DataType(type,unit);
    weatherData.value = value;
    Object.assign(weatherData, tempData);
    Object.assign(weatherData, tempEvent);

    weatherData.getValue = function(){
        return weatherData.value;
    },

    weatherData.matches = function(data){
        if(data.getTime()==weatherData.getTime()&&data.getType()==weatherData.getType()
        &&data.getPlace()==weatherData.getPlace()&&data.getUnit()==weatherData.getUnit()){
            return true;
        }else{
            return false;
        }
    }

    return weatherData;
}
//---------------------------------------------------------------------------------------------------------------
const Temperature = function(type, unit, time, place,value){
    const temperature = {}
    let wd = WeatherData(type,unit,time,place,value);
    Object.assign(temperature, wd);
    temperature.value = value;

    temperature.convertToF = function(){

        if(temperature.unit == "C"){    
            temperature.unit = "F";
            temperature.value = temperature.value * 1.8;
        }
        
    },
    temperature.convertToC= function(){
        if(temperature.unit == "F"){
            temperature.unit = "C";
            temperature.value = temperature.value/1.8;
        }
    }

    return temperature;
}
//----------------------------------------------------------------------------------------------------------------
const Precipitation = function(type, unit, time, place,value){
    const precipitation = {};
    let wd = WeatherData(type,unit,time,place,value);
    Object.assign(precipitation, wd);
    precipitation.value = value;

    precipitation.getPrecipationType = function(){
        return precipitation.getType;
    },

    precipitation.convertToInch = function(){

        if(precipitation.unit == "MM"){    
            precipitation.unit = "Inch";
            precipitation.value = precipitation.value * 0.0393700787;
        }
        
    },

    precipitation.convertToMM = function(){
        if(precipitation.unit == "Inch"){
            precipitation.unit = "MM";
            precipitation.value = precipitation.value/0.0393700787;
        }
    }

    return precipitation;
}
//--------------------------------------------------------------------------------------------
const Wind = function(type, unit, time, place, direction, value){
    const wind = {};
    let wd = WeatherData(type,unit,time,place,value);
    wind.value = value;
    wind.direction = direction;
    Object.assign(wind,wd);

    wind.getDirection = function(){
        return wind.direction;
    },

    wind.convertToMPH = function(){

        if(wind.unit == "MS"){    
            wind.unit = "MPH";
            wind.value = wind.value * 2.24;
        }
        
    },
    wind.convertToMS = function(){
        if(wind.unit == "MPH"){
            wind.unit = "MS";
            wind.value = wind.value / 2.24;
        }
    }
    return wind;
}
//--------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------
const WeatherHistory = function(data,place,type,period,){
    const wh = {};
    wh.data = data;
    wh.place = place;
    wh.type = type;
    wh.period = period;

    
    wh.getPlaceFilter = function(){
        return wh.place;
    },
    wh.setPlaceFilter = function(filter){
        wh.place = filter;
    },
    wh.clearPlaceFilter = function(){
        wh.place = "";
    },
    wh.getTypeFilter = function(){
        return wh.type;
    },
    wh.setTypeFilter = function(filter){
        wh.type = filter;
    },
    wh.clearTypeFilter = function(){
        wh.type = "";
    },
    wh.getPeriodFilter = function(){
        return wh.period;
    },
    wh.setPeriodFilter = function(filter){
        wh.period = filter;
    },
    wh.clearPeriodFilter = function(){
        wh.period = [0,0];
    },
    wh.convertToUSUnits = function(){
        for(let i = 0; i < wh.data.lenght; i++){
            if(data[i] instanceof Precipitation){
                data[i].convertToInch();
            }
            if(data[i] instanceof Wind){
                data[i].convertToMPH();
            }
            if(data[i] instanceof Temperature){
                data[i].convertToF();
            }
        }
    },
    wh.convertToInternationalUnits = function(){
        for(let i = 0; i < wh.data.lenght; i++){
            if(data[i] instanceof Precipitation){
                data[i].convertToMM();
            }
            if(data[i] instanceof Wind){
                data[i].convertToMS();
            }
            if(data[i] instanceof Temperature){
                data[i].convertToC();
            }
        }
    },
    wh.add = function(data){
        wh.data.add(data);
    },
    wh.getFilteredPredictions = function(){
        let filteredData;
        let filters = new WeatherData(wh.type,wh.unit,wh.time,wh.place);
        for(let i = 0;i< wh.data.lenght; i++){
            if(wh.data[i].matches(filters)){
                filteredData.add(wh.data[i]);
            }
        }
        return filteredData;
    }
    return wh;
}
//--------------------------------------------------------------------------------------------
const WeatherPrediction = function(type, unit, time, place, number, data){
    const weatherPrediction = {};
    let tempEvent = Event(time,place);
    let tempData = DataType(type,unit);
    weatherPrediction.number = number;
    weatherPrediction.data = data;
    Object.assign(weatherPrediction,tempData);
    Object.assign(weatherPrediction, tempEvent);
    
    weatherPrediction.getMax = function(){
        let max = 0;
        for (let i = 0; i < weatherPrediction.data.lenght; i++){
            if (max < i){
                max = i;
            }
        }
        return max;
    },

    weatherPrediction.getMin = function(){
        let min = 100;
        for (let i = 0; i < weatherPrediction.data.lenght; i++){
            if (min > i){
                min = i;
            }
        }
        return min;
    },
    weatherPrediction.matches = function(data){
        if(data.getTime()==weatherPrediction.getTime()&&data.getType()==weatherPrediction.getType()
        &&data.getPlace()==weatherPrediction.getPlace()&&data.getUnit()==weatherPrediction.getUnit()){
            return true;
        }else{
            return false;
        }
    }
    return weatherPrediction;
}

//---------------------------------------------------------------------------------------------------------

const TemperaturePrediction = function(unit, time, place, number, data, value){
    const tempPrediction = {};
    let WP = WeatherPrediction("Temperature", unit, time, place, number, data);
    Object.assign(tempPrediction,WP);
    tempPrediction.value = value;

    tempPrediction.convertToF = function(){

        if(tempPrediction.unit == "C"){    
            tempPrediction.unit = "F";
            tempPrediction.value = tempPrediction.value * 1.8;
        }
        
    },
    tempPrediction.convertToC = function(){
        if(tempPrediction.unit == "F"){
            tempPrediction.unit = "C";
            tempPrediction.value = tempPrediction.value/1.8;
        }
    }
    return tempPrediction;
}

//----------------------------------------------------------------------------------------------------------
const PrecipitationPrediction = function(unit, time, place, number, data, value){
    const precipitation = {};
    let WP = WeatherPrediction("Precipitation", unit, time, place, number, data);
    Object.assign(precipitation,WP);
    precipitation.value = value;

    precipitation.matches = function(data){
        if(data.getTime()==precipitation.getTime()&&data.getType()==precipitation.getType()
        &&data.getPlace()==precipitation.getPlace()&&data.getUnit()==precipitation.getUnit()){
            return true;
        }else{
            return false;
        }
    },

    precipitation.getExpectedTypes = function(){
        return ["Inch", "MM"];
    },

    precipitation.convertToInch = function(){

        if(precipitation.unit == "MM"){    
            precipitation.unit = "Inch";
            precipitation.value = precipitation.value * 0.0393700787;
        }
        
    },
    precipitation.convertToMM = function(){
        if(precipitation.unit == "Inch"){
            precipitation.unit = "MM";
            precipitation.value = precipitation.value/0.0393700787;
        }
    }
    return precipitation;
}


//-------------------------------------------------------------------------------------------------------
const WindPrediction = function(unit, time, place, number, data, direction, value){
    const wind = {};
    let WP = WeatherPrediction("Wind", unit, time, place, number, data);
    Object.assign(wind,WP);
    wind.direction = direction;
    wind.value = value;

    wind.matches = function(data){
        if(data.getTime()==wind.getTime()&&data.getType()==wind.getType()
        &&data.getPlace()==wind.getPlace()&&data.getUnit()==wind.getUnit()){
            return true;
        }else{
            return false;
        }
    },

    wind.getExpectedTypes = function(){
        return ["North", "West", "South", "East"];
    },

    wind.convertToMPH = function(){

        if(wind.unit == "MS"){    
            wind.unit = "MPH";
            wind.value = wind.value * 2.24;
        }
        
    },
    wind.convertToMS = function(){
        if(wind.unit == "MPH"){
            wind.unit = "MS";
            wind.value = wind.value / 2.24;
        }
    }
    return wind;
}
//-------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
const DateInterval = function(from, to){
    const DI = {}
    DI.from = from;
    DI.to = to; 

    DI.getFrom = function(){
        return DI.from;
    },
    DI.getTo = function(){
        return DI.to;
    },
    DI.contains = function(d){
        if(d >= from && d <= to){
            return true;
        }else{
            return false;
        }
    }
    return DI;
}
//-------------------------------------------------------------------------------------------------------
const WeatherForecast = function(data,place,type,period){
    const WF = {};
    WF.data = data;
    WF.place = place;
    WF.type = type;
    WF.period = period;

    WF.getPlaceFilter = function(){
        return WF.place;
    },
    WF.setPlaceFilter = function(filter){
        WF.place = filter;
    },
    WF.clearPlaceFilter = function(){
        WF.place = "";
    },
    WF.getTypeFilter = function(){
        return WF.type;
    },
    WF.setTypeFilter = function(filter){
        WF.type = filter;
    },
    WF.clearTypeFilter = function(){
        WF.type = "";
    },
    WF.getPeriodFilter = function(){
        return WF.period;
    },
    WF.setPeriodFilter = function(filter){
        WF.period = filter;
    },
    WF.clearPeriodFilter = function(){
        WF.period = [0,0];
    },
    WF.convertToUSUnits = function(){
        for(let i = 0; i < WF.data.lenght; i++){
            if(data[i] instanceof PrecipitationPrediction){
                data[i].convertToInch();
            }
            if(data[i] instanceof WindPrediction){
                data[i].convertToMPH();
            }
            if(data[i] instanceof TemperaturePrediction){
                data[i].convertToF();
            }
        }
    },
    WF.convertToInternationalUnits = function(){
        for(let i = 0; i < WF.data.lenght; i++){
            if(data[i] instanceof PrecipitationPrediction){
                data[i].convertToMM();
            }
            if(data[i] instanceof WindPrediction){
                data[i].convertToMS();
            }
            if(data[i] instanceof TemperaturePrediction){
                data[i].convertToC();
            }
        }
    },
    WF.add = function(data){
        WF.data.add(data);
    },
    WF.getFilteredPredictions = function(){
        let filteredData;
        let filters = new WeatherPrediction(WF.type,WF.unit,WF.time,WF.place);
        for(let i = 0;i< WF.data.lenght; i++){
            if(WF.data[i].matches(filters)){
                filteredData.add(WF.data[i]);
            }
        }
        return filteredData;
    }
    return WF;
}