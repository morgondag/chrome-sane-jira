

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
	var commentsTab = document.querySelector('.tabs2');
	if(!commentsTab){
		return;
	}
	commentsTab.style.display = "none";
}
