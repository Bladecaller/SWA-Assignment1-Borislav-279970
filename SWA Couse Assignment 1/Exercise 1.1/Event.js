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
