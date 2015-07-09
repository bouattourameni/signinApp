angular.module('ionicApp').controller('AddEventController', ['EventService',function(){
  this.addEvent = {
    title : '123',
    description : '',
    type : '',
    date : ''
  }
  save = function(){
  	setTitle(addEvent.title);
  	console.log(getTitle());

  }
  return true;
}
 ] )