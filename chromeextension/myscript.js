var textField,
    reset;
//handles reset button click event
function handleResetButtonEvent() {
	setTextFieldValue("");
	handleTextFieldEvent();
}

//handles textfield key press event
function handleTextFieldEvent() {
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": textField.value});
  });
}
//initial function when DOM gets loaded
function init() {
    textField = document.getElementById('textField');
    reset = document.getElementById('reset');
	
    textField.addEventListener('keyup', handleTextFieldEvent, false);
    reset.addEventListener('click', handleResetButtonEvent, false);
}   

//sets textfield value
function setTextFieldValue(text) {
  document.getElementById('textField').value = text;
}
//event listener when DOM gets loaded 
document.addEventListener('DOMContentLoaded', init);
