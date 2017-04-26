var textField,
    send,list,isAlive=false;
var socket = io('http://localhost:3000');
socket.connect(); 
socket.on('message', function(msg){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(msg));
		list.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight);
        });
 // Add a connect listener
socket.on('connect',function() {
	isAlive=true;
      console.log('Client has connected to the server!');
    });		
 // Add a disconnect listener
socket.on('disconnect',function() {
	isAlive=false;
	if(!isAlive){
		alert('The client has disconnected!');
      console.log('The client has disconnected!');
	}
    });

 // Add a disconnect listener
socket.on('error',function() {
	isAlive=false;
	alert('Socket connection Error');
     console.log('Socket sonnection Error');
	 socket.close();
    });
	
//handles send button click event
function handleSendButtonEvent() {
	handleTextFieldEvent();
	setTextFieldValue("");
}

//handles textfield key press event
function handleTextFieldEvent() {
 if(isAlive){socket.emit('message', textField.value);}
}
//initial function when DOM gets loaded
function init() {
	list=document.getElementById('messages')
    textField = document.getElementById('textField');
    send = document.getElementById('send');
    send.addEventListener('click', handleSendButtonEvent, false);
	list.clear;
}   

//sets textfield value
function setTextFieldValue(text) {
  document.getElementById('textField').value = text;
}
//event listener when DOM gets loaded 
document.addEventListener('DOMContentLoaded', init);

