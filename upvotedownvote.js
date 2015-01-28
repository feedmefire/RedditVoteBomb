var uvdvi;
var uvdvtimer = 350;

function upvote(){
	uvdvi = 1;
	$("#siteTable > .thing > .midcol > .arrow.up.login-required").each(function(){
		var button = this;
		window.setTimeout(function(){ button.click(); }, uvdvtimer * uvdvi);
		uvdvi++;
	});
}

function downvote(){
	uvdvi = 1;
	$("#siteTable > .thing > .midcol > .arrow.down.login-required").each(function(){
		var button = this;
		window.setTimeout(function(){ button.click(); }, uvdvtimer * uvdvi);
		uvdvi++;
	});
}

function reset(){
	uvdvi = 1;
	$("#siteTable > .thing > .midcol > .arrow.upmod.login-required").each(function(){
		var button = this;
		window.setTimeout(function(){ button.click(); }, uvdvtimer * uvdvi);
		uvdvi++;
	});

	$("#siteTable > .thing > .midcol > .arrow.downmod.login-required").each(function(){
		var button = this;
		window.setTimeout(function(){ button.click(); }, uvdvtimer * uvdvi);
		uvdvi++;
	});
}