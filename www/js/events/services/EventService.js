angular.module('ionicApp').factory('EventService',function(){
	var event = {
		title : '',
		description : '',
		type : '',
		addresse : '',
		date : ''
	}

getTitle = function (){
	return event.title;
}
setTitle = function (title){
	event.title = title;
	return true;
}
return true;
})