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