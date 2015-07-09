angular.module('ionicApp').factory('EventService',function(){
	var event = {
		title : '',
		description : '',
		type : '',
		address : '',
		date : ''
	}
createEvent = function(){
listEvent.push(event);
return true;
}
editEvent = function () {

}
deleteEvent = function () {

}
getListEvent = function () {
	return listEvent;
}
var listEvent = [
    {
      "title": "event 1",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
    {
      "title": "event2",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
    {
      "title": "event 3",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
    {
      "title": "event 4",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
    {
      "title": "event 5",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
    {
      "title": "event 6",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
    {
      "title": "event 7",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
     {
      "title": "event 8",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
     {
      "title": "event 9",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    },
     {
      "title": "event 10",
      "description": "event",
      "type": "public",
      "address": "Sfax, Tunisia"
    }
  ]
getTitle = function (){
	return event.title;
}
setTitle = function (title){
	event.title = title;
	return true;
}

getDescription = function (){
	return event.description;
}
setDescription = function (description){
	event.description = description;
	return true;
}


getType = function (){
	return event.type;
}
setType = function (type){
	event.type = type;
	return true;
}


getAddress = function (){
	return event.address;
}
setAddress = function (address){
	event.address = address;
	return true;
}

getDate = function (){
	return event.date;
}
setDate = function (date){
	event.date = date;
	return true;
}
getEvent = function(){
	return event;
}
return true;
})
