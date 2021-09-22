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