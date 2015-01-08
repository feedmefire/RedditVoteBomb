
$( document ).ready(function() {

	$(".upvote").click(function(){		
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			if(tabs[0].url.indexOf("reddit.com/user") >= 0){
				chrome.tabs.executeScript({
					code: 'upvote();'
				});	
			}
		});			
	});
	
	$(".downvote").click(function(){
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			if(tabs[0].url.indexOf("reddit.com/user") >= 0){
				chrome.tabs.executeScript({
					code: 'downvote();'
				});	
			}
		});	
	});
	
	$(".reset").click(function(){
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			if(tabs[0].url.indexOf("reddit.com/user") >= 0){
				chrome.tabs.executeScript({
					code: 'reset();'
				});	
			}
		});	
	});
});