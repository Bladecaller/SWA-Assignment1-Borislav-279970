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