var textField,
    send,list;
//var io=require('socket.io-client');
var socket = io('http://localhost:3000');
socket.connect(); 
socket.on('message', function(msg){
          list.append(msg);
          window.scrollTo(0, document.body.scrollHeight);
        });
 // Add a connect listener
socket.on('connect',function() {
      console.log('Client has connected to the server!');
    });		
 // Add a disconnect listener
socket.on('disconnect',function() {
      console.log('The client has disconnected!');
    });
	
//handles send button click event
function handleSendButtonEvent() {
	handleTextFieldEvent();
	setTextFieldValue("");
}

//handles textfield key press event
function handleTextFieldEvent() {
 socket.emit('message', textField.value);
}
//initial function when DOM gets loaded
function init() {
	list=document.getElementById('messages')
    textField = document.getElementById('textField');
    send = document.getElementById('send');
    send.addEventListener('click', handleSendButtonEvent, false);
}   

//sets textfield value
function setTextFieldValue(text) {
  document.getElementById('textField').value = text;
}
//event listener when DOM gets loaded 
document.addEventListener('DOMContentLoaded', init);

