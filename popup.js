
$( document ).ready(function() {

	$(".upvote").click(function(){		
		if($(this).css("background-position") === "20px 0px"){
			$(this).css("background-position", "0px 0px");
			$(".downvote").css("background-position", "20px 0px");
			chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
				if(tabs[0].url.indexOf("reddit.com/user") >= 0){
					chrome.tabs.executeScript({
						code: 'upvote();'
					});	
				}
			});	
		}
		else{
			$(this).css("background-position", "20px 0px");
			chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
				if(tabs[0].url.indexOf("reddit.com/user") >= 0){
					chrome.tabs.executeScript({
						code: 'reset();'
					});	
				}
			});
		}
	});
	
	$(".downvote").click(function(){
		if($(this).css("background-position") === "20px 0px"){
			$(this).css("background-position", "0px 0px");
			$(".upvote").css("background-position", "20px 0px");
			chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
				if(tabs[0].url.indexOf("reddit.com/user") >= 0){
					chrome.tabs.executeScript({
						code: 'downvote();'
					});	
				}
			});	
		}
		else{
			$(this).css("background-position", "20px 0px");
			chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
				if(tabs[0].url.indexOf("reddit.com/user") >= 0){
					chrome.tabs.executeScript({
						code: 'reset();'
					});	
				}
			});
		}
	});
});