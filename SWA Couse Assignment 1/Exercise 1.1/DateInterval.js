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