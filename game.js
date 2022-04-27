//alert("Click ok to start the game");

//----------------------- var declare ---------------------

var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 0;


//-------------------------start button ---------------------

document.querySelector(".startbtn").addEventListener("click", startButtonClick);

document.querySelector(".submitbtn").addEventListener("click", submitButtonClick);

function startButtonClick() {

	//startGame();
	gamePattern = [];
	userClickedPattern = [];

	var seqLen = 3;
	var timegap = 1000;

	for (var i = 0; i < seqLen; i++) {
		window.setTimeout(startGame, i * timegap);
	}


	window.setTimeout(function() {
		$("#level-title").text("Click Now !!")
	}, seqLen * timegap);

}

function submitButtonClick() {
	if (checkResult(gamePattern, userClickedPattern)) {

		$("#level-title").text("Congratulation !!")

	} else {

		$("#level-title").text("Try Again!!")
	}
}

function checkResult(gamePattern, userClickedPattern) {

	if (gamePattern.length == userClickedPattern.length) {

		for (var i = 0; i < gamePattern.length; i++) {

			if (gamePattern[i] != userClickedPattern[i])
				return false;

		}

		return true;
	}
	return false
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

	var userChosenColour = this.id;

	btnFlash(userChosenColour);

	userClickedPattern.push(userChosenColour);

	playSound(userChosenColour);

	console.log(userClickedPattern);

});


function gotoNextLevel(){
	
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

	}

}
