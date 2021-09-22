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