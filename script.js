
window.onload = function(){
	clickComments();
}

// show comments only..
var clickComments = function(){
	var tabPanel = document.querySelector('#comment-tabpanel');
	if(!tabPanel){
		return;
	}
	tabPanel.click();
}
