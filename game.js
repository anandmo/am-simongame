//alert("Click ok to start the game");

//----------------------- var declare ---------------------

var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 0;
var seqLen = 3;
var timegap = 1000;
var clickDone = 0;
var clickLeft = 0;

//-------------------------start button ---------------------

document.querySelector(".startbtn").addEventListener("click", startButtonClick);

//document.querySelector(".btn").addEventListener("click", submitButtonClick);

function startButtonClick() {

	gamePattern = [];
	userClickedPattern = [];

	for (var i = 0; i < seqLen; i++) {
		window.setTimeout(startGame, i * timegap);
	}


	window.setTimeout(function() {
		$("#level-title").text("Repeat Now");
	}, seqLen * timegap);

}

function submitButtonClick() {

	clickDone++;
	clickLeft = seqLen - clickDone;

	if (checkResult(gamePattern, userClickedPattern)) {

		if (gamePattern.length == userClickedPattern.length) {
			gotoNextLevel();

			if (currentLevel % 3 == 0) {
				seqLen++;
				timegap + 100;
			}

			clickDone = 0;
			clickLeft = 0;
			$("#level-title").text("😀 Level " + currentLevel);
			window.setTimeout(startButtonClick, 1000);
		} else {
			$("#level-title").text(clickLeft + " click left");
		}

	} else {

		clickDone = 0;
		clickLeft = 0;
		$("#level-title").text(" Try Again 😢 !! Press start ");

		window.setTimeout(function() {
			$("#level-title").text("Simon Game")
		}, 1000);

		playSound("wrong");
	}
}

function checkResult(gamePattern, userClickedPattern) {

	for (var i = 0; i < userClickedPattern.length; i++) {

		if (gamePattern[i] != userClickedPattern[i])
			return false;

	}
	return true;
}

function startGame() {
	randomChosenColour = buttonColours[nextSequence()];
	gamePattern.push(randomChosenColour)
	console.log(gamePattern);
	btnFlash(randomChosenColour);
	playSound(randomChosenColour);
}

//------------------user click-----------------------------

$(".btn").click(function() {

	if (gamePattern == 0) {
		$("#level-title").text("Click start to start the game");

		window.setTimeout(function() {
			$("#level-title").text("Simon Game")
		}, 1000);

	} else {

		var userChosenColour = this.id;
		btnFlash(userChosenColour);
		userClickedPattern.push(userChosenColour);
		playSound(userChosenColour);
		submitButtonClick();
	}

});


function gotoNextLevel() {

	return currentLevel++;

}


//------------------button flash ---------------------

function btnFlash(colour) {
	$("." + colour).fadeOut(50).fadeIn(50);//.fadeOut(100).fadeIn(100);

}

function nextSequence() {
	var randomNumber = Math.floor((Math.random() * 4));
	return randomNumber;
}


function playSound(randomChosenColour) {

	switch (randomChosenColour) {

		case "red":
			var sound = new Audio('sounds/red.mp3');
			sound.autoplay = true;
			sound.play();
			break;
		case "blue":
			var sound = new Audio('sounds/blue.mp3');
			sound.autoplay = true;
			sound.play();
			break;
		case "green":
			var sound = new Audio('sounds/green.mp3');
			sound.autoplay = true;

			sound.play();
			break;
		case "yellow":
			var sound = new Audio('sounds/yellow.mp3');
			sound.autoplay = true;

			sound.play();
			break;

		case "wrong":
			var sound = new Audio('sounds/wrong.mp3');
			sound.autoplay = true;

			sound.play();
			break;


	}

}
