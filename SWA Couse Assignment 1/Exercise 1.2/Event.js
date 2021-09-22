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