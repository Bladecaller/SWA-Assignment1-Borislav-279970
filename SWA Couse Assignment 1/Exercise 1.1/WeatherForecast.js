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