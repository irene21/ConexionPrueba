//eventos  de IGU
$(function(){
	document.addEventListener("deviceready", function(){

$('#nos').tap(function(){alert('alerta tap');
	//console.log("alerta tap");
console.log(navigator.vibrate);
navigator.notification.beep(1);
navigator.vibrate(1000);
   	navigator.notification.alert(
    'You are the winner!',  // message
    null,         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);
});

},false);

});