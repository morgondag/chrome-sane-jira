
window.onload = function(){
	clickComments();
}

var setBodyClass = function(){
	var brand = window.location.hostname.split('.')[0];
	var body = document.querySelector('body');
	body.classList.add(brand);
}
setBodyClass();

// show comments only..
var clickComments = function(){
	var tabPanel = document.querySelector('#comment-tabpanel');
	if(!tabPanel){
		return;
	}
	tabPanel.click();
}
