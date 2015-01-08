var timer = 350;

function upvote(){
	var i = 1;
	$("#siteTable > .thing > .midcol > .arrow.up.login-required").each(function(){
		var button = this;
		setTimeout(function(){ button.click(); }, timer * i);
		i++;
	});
}

function downvote(){
	var i = 1;
	$("#siteTable > .thing > .midcol > .arrow.down.login-required").each(function(){
		var button = this;
		setTimeout(function(){ button.click(); }, timer * i);
		i++;
	});
}

function reset(){
	var i = 1;
	$("#siteTable > .thing > .midcol > .arrow.upmod.login-required").each(function(){
		var button = this;
		setTimeout(function(){ button.click(); }, timer * i);
		i++;
	});

	$("#siteTable > .thing > .midcol > .arrow.downmod.login-required").each(function(){
		var button = this;
		setTimeout(function(){ button.click(); }, timer * i);
		i++;
	});
}
