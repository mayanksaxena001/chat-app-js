//content script to listen to extension events
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	var val = Array.prototype.slice.call(document.getElementsByTagName('input')).find(function(input){ return input.type === 'email'});
	if(val!=null){
	val.value=request.message;
  }
  }
);