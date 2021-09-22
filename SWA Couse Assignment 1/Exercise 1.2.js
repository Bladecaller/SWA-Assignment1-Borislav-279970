function Event(time,place){
    this.time = time;
    this.place = place;
}

Event.prototype = {
    getTime:function() {
        return this.time;
    },
    getPlace:function() {
        return this.place;
    }
}
//---------------------------------------------------------------------------------------------------
function DataType(type, unit){
        this.type = type;
        this.unit = unit;
}

DataType.prototype = {
    getUnit:function() {
        return this.unit;
    },
    getType:function() {
        return this.type;
    }
}
//--------------------------------------------------------------------------------------------------
function WeatherData(type, unit, time, place, value){
    Event.call(this, time, place);
    DataType.call(this, type, unit);
    this.value = value;
}
WeatherData.prototype ={
    getValue:function(){
        return this.value;
    },
    matches:function(data){
        if(data.getTime()==this.getTime()&&data.getType()==this.getType()
        &&data.getPlace()==this.getPlace()&&data.getUnit()==this.getUnit()){
            return true;
        }else{
            return false;
        }
    }
}

WeatherData.prototype = Object.create(WeatherData.prototype);
Object.assign(WeatherData.prototype, Event.prototype);
Object.assign(WeatherData.prototype, DataType.prototype);
//---------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------
function Wind(unit, time, place, value, direction){
    WeatherData.call(this, "Wind", unit, time, place, value);
    this.value = value;
    this.direction = direction
}
Wind.prototype = {
    getDirection:function(){
        return this.direction;
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
Wind.prototype = Object.create(Wind.prototype);
Object.assign(Wind.prototype, WeatherData.prototype);
//--------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------
function WeatherHistory(data,place,type,period,){
    this.data = data;
    this.place = place;
    this.type = type;
    this.period = period;
}

WeatherForecast.prototype ={
    getPlaceFilter:function(){
        return this.place;
    },
    setPlaceFilter:function(filter){
        this.place = filter;
    },
    clearPlaceFilter:function(){
        this.place = "";
    },
    getTypeFilter:function(){
        return this.type;
    },
    setTypeFilter:function(filter){
        this.type = filter;
    },
    clearTypeFilter:function(){
        this.type = "";
    },
    getPeriodFilter:function(){
        return this.period;
    },
    setPeriodFilter:function(filter){
        this.period = filter;
    },
    clearPeriodFilter:function(){
        this.period = [0,0];
    },
    convertToUSUnits:function(){
        for(let i = 0; i < this.data.lenght; i++){
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
    convertToInternationalUnits:function(){
        for(let i = 0; i < this.data.lenght; i++){
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
    add:function(data){
        this.data.add(data);
    },
    getFilteredPredictions:function(){
        let filteredData;
        let filters = new WeatherData(this.type,this.unit,this.time,this.place);
        for(let i = 0;i< this.data.lenght; i++){
            if(this.data[i].matches(filters)){
                filteredData.add(this.data[i]);
            }
        }
        return filteredData;
    }
}
WeatherHistory.prototype = Object.create(WeatherHistory.prototype);

//--------------------------------------------------------------------------------------------
function WeatherPrediction(type, unit, time, place, number, data){
    Event.call(this, time, place);
    DataType.call(this, type, unit);
    this.number = number;
    this.data = data;
}

WeatherPrediction.prototype = {
    getMax:function(){
        let max = 0;
        for (let i = 0; i < this.data.lenght; i++){
            if (max < i){
                max = i;
            }
        }
        return max;
    },

    getMin:function(){
        let min = 100;
        for (let i = 0; i < this.data.lenght; i++){
            if (min > i){
                min = i;
            }
        }
        return min;
    },
    matches:function(data){
        if(data.getTime()==this.getTime()&&data.getType()==this.getType()
        &&data.getPlace()==this.getPlace()&&data.getUnit()==this.getUnit()){
            return true;
        }else{
            return false;
        }
    }
}

WeatherPrediction.prototype = Object.create(WeatherPrediction.prototype);
Object.assign(WeatherPrediction.prototype, Event.prototype);
Object.assign(WeatherPrediction.prototype, DataType.prototype);
//---------------------------------------------------------------------------------------------------------

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
//----------------------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------
function DateInterval(from, to){
    this.from = from;
    this.to = to; 
}
DateInterval.prototype={
    getFrom:function(){
        return this.from;
    },
    getTo:function(){
        return this.to;
    },
    contains(d){
        if(d >= from && d <= to){
            return true;
        }else{
            return false;
        }
    }
}
DateInterval.prototype = Object.create(DateInterval.prototype);
//-------------------------------------------------------------------------------------------------------
function WeatherForecast(data,place,type,period){
    this.data = data;
    this.place = place;
    this.type = type;
    this.period = period;
}

WeatherForecast.prototype ={
    getPlaceFilter:function(){
        return this.place;
    },
    setPlaceFilter:function(filter){
        this.place = filter;
    },
    clearPlaceFilter:function(){
        this.place = "";
    },
    getTypeFilter:function(){
        return this.type;
    },
    setTypeFilter:function(filter){
        this.type = filter;
    },
    clearTypeFilter:function(){
        this.type = "";
    },
    getPeriodFilter:function(){
        return this.period;
    },
    setPeriodFilter:function(filter){
        this.period = filter;
    },
    clearPeriodFilter:function(){
        this.period = [0,0];
    },
    convertToUSUnits:function(){
        for(let i = 0; i < this.data.lenght; i++){
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
    convertToInternationalUnits:function(){
        for(let i = 0; i < this.data.lenght; i++){
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
    add:function(data){
        this.data.add(data);
    },
    getFilteredPredictions:function(){
        let filteredData;
        let filters = new WeatherPrediction(this.type,this.unit,this.time,this.place);
        for(let i = 0;i< this.data.lenght; i++){
            if(this.data[i].matches(filters)){
                filteredData.add(this.data[i]);
            }
        }
        return filteredData;
    }
}
WeatherForecast.prototype = Object.create(WeatherForecast.prototype);