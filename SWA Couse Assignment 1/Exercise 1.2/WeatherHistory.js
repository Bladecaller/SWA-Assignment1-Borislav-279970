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
