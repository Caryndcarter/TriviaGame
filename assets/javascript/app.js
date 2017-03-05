$(document).ready(function() {	

beginning ();	

var questions = [
	{
		question: "What is the name of the world-class museum pictured in the background?",
		questionNumber: 0,
		questionPicture: "",
		answers: ["The Hermitage", "The British Museum", "The Prado", "The Louvre"],
		useCount: 0,
		correctAnswer: 3,
		answerExp: "The Louvre Museum is the largest museum in the world.  Its pyramid is iconic.",
		answerPhoto: ""
	},
	{
		question: "Where is the Louvre?",
		questionNumber: 1,
		questionPicture: "",
		answers: ["Paris", "London", "Madrid", "Berlin"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "The Louvre is a historic landmark in the city of Paris.",
		answerPhoto: "assets/images/rsz_paris_380x244.jpg"
	},
	{
		question: "What is the most famous painting in the Louvre?",
		questionNumber: 2,
		questionPicture: "", 
		answers: ["The Starry Night", "The Scream", "The Mona Lisa", "The Last Supper"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "The Mona Lisa is a portrait of Lisa Gherardini by Leonardo da Vinci, on display in the Louvre since 1797.",
		answerPhoto:"assets/images/rsz_monalisa.jpg"
	},
	{
		question: "The oldest foundations of the Louvre date to which century?",
		questionNumber: 3,
		questionPicture: "",
		answers: ["19th", "17th", "15th", "12th"],
		useCount: 0,
		correctAnswer: 3,
		answerExp: "The Louvre was originally built as a fortress in 1190 with a moat to defend against the north.",
		answerPhoto: ""
	},
	{
		question: "What event triggered the Louvre becoming a museum?",
		questionNumber: 4, 
		questionPicture: "", 
		answers: ["Joan of Arc led a victory against the British at Orleans", "Louis XIV moved out to Versailles", "Napoleon crowned himself Emperor", "France and the Allies defeated Germany in WWI"],
		useCount: 0,
		correctAnswer: 1,
		answerExp: "In 1682, Louis XIV relocated from the Louvre and moved to Versailles. After the French Revolution, the first exhibits in 1793 displayed the royal collection of art.",
		answerPhoto: ""
	},
	{
		question: "True or False: The architect who designed the glass pyramid at the Louvre is of at least partial European heritage?",
		questionNumber: 5,
		questionPicture: "", 
		answers: ["True", "False"],
		useCount: 0,
		correctAnswer: 1,
		answerExp: "I.M. Pei, a Chinese-born American architect, was chosen by the French President to re-develop the Louvre in the 1980s.  He won the Pritzker Prize, the Nobel Prize for Architecture, in 1983.",
		answerPhoto: ""
	},
	{
		question: "What is the most beloved sculpture in the Louvre?",
		questionNumber: 6,
		questionPicture: "",
		answers: ["Venus de Milo","Winged Victory of Samothrace", "The Dying Slave by Michelangelo", "Psyche Revived by Cupid's Kiss by Antonio Canova"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "Venus de Milo, one of the most famous Greek sculptures of all time, created between 130 and 100 B.C., is always surrounded with vistors.",
		answerPhoto: "assets/images/rsz_venusdemilo.jpg"
	},
	{
		question: "These Lamassu figures from the citadel of Sargon II, on display in the Louvre, are from which ancient near eastern civilization?",
		questionNumber: 7, 
		questionPicture: "assets/images/lamassu.jpg", 
		answers: ["Egyptian","Babylonian", "Assyrian", "Greek"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "Meant to protect the kingdom from enemy visitors, the Lamassu were imposing symbols of the Assyrian Empire (934-609 B.C.E.).",
		answerPhoto:""
	},
	{
		question: "True or False: Sitting in the Louvre atop a large staircase, the Winged Victory of Samothrace, created in the 2nd century B.C., was initially discovered missing one wing.",
		questionNumber: 8, 
		questionPicture: "assets/images/rsz_samothrace.jpg",
		answers: ["True", "False"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "Also called the Nike of Samothrace, Winged Victory's outstretched right wing is a symmetric, plaster version of the original left one.",
		answerPhoto: ""
	},
	{
		question: "True or False: A famous Louvre piece, La Grande Odalisque by Jean-Auguste Ingres, depicts a woman with five extra vertebrae.",
		questionNumber: 9,
		questionPicture: "assets/images/rsz_odalisque.jpg",
		answers: ["True", "False"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "In the 19th century, the painting was notorious for its anatomical inaccuracy, adding what was assumed to be three extra vertebrae, but in 2004 a scientific measurement was done that found five.",
		answerPhoto: "" 
	}

];

var presentedQuestion = "";
var intervalID = "";

var gameState = {
	totalCorrect: 0,
	totalIncorrect: 0,
	totalUnanswered: 0, 
	currentQuestion: "",
	totalQuestionCount: 0,
	selection : "",
	timer: 16,
}

/* Function that lays out the screen at the beginning of the game. The board is hidden. The start
button is available. */

function beginning () {
	$(".triviaboard").hide();

	$(".start").click( function() {
		$(".triviaboard").show ();
		startGame(); 
	});
}

/* Function that lays starts the game.  The board is refreshed (in case it's round 2).  The stats are
refreshed (in case it's round 2).  The question is chosen. */

function startGame () {	
	refreshBoard (); 
	refreshStats (); 
	chooseQuestion(); 
}

function refreshStats () {
	gameState.totalIncorrect = 0; 
	gameState.totalCorrect = 0; 
	gameState.totalUnanswered = 0;
	gameState.totalQuestionCount = 0;
	gameState.timer = 16; 	
		for (var i = 0; i < 10; i++) {
		questions[i].useCount = 0; 
	}
}

function refreshBoard () {
	
	$(".timer").html("<div></div>");
	$(".picture").html("<div></div>");
	$(".question-answer").html("<div></div>");
	$(".options").html("<div></div>");
}

/* Function that chooses the question randomly and displays it and starts the timer. It figures
out if the question has been asked before in this round and if so, it doesn't choose it. It goes
through the process of trying to choose again, if so. 

If 6 questions have already been played, it ends the game. It refreshes the board and it shows 
the stats at game's end. */

function chooseQuestion () {
	clearTimer (); 
	$(".timer").html("<div> 00:15 </div>");
	presentedQuestion = Math.floor(Math.random(0 - 10) * 10);
	console.log("presented question:" + presentedQuestion);

	if (gameState.totalQuestionCount < 6) {
		if(questions[presentedQuestion].useCount === 0) {
			gameState.timer = 16;
			startTimer ();

			$(".picture").html("<img src=" + questions[presentedQuestion].questionPicture + ">");
			$(".question-answer").html(questions[presentedQuestion].question);
				for (var i = 0; i < questions[presentedQuestion].answers.length; i++) {
					var choices = $("<div>");
					choices.addClass("choices-class");
					choices.append(questions[presentedQuestion].answers[i]);
					$(".options").append(choices);
				}

			questions[presentedQuestion].useCount++;
			gameState.totalQuestionCount ++; 
			grabSelection ();

		} else {
			chooseQuestion (); 
		}

	} else if (gameState.totalQuestionCount === 6) {
		refreshBoard (); 
		showStats();
	}

	console.log("use count: " + questions[presentedQuestion].useCount);
	console.log("total # of q's: " + gameState.totalQuestionCount);
}

/* Function that shows all the stats, but then also calculates how many questions were unanswered
because the time elapsed and no answer was selected. */

function showStats () {
	clearTimer ();
	$(".timer").html("<div></div>");
	$(".question-answer").html("<div><h2> Game Over </h2></div>");
	$(".options").html("<div> Correct: " + gameState.totalCorrect + "</div>");
	$(".options").append("<div> Incorrect: " + gameState.totalIncorrect + "</div>");	
	var totalAnswered = parseInt(gameState.totalCorrect) + parseInt(gameState.totalIncorrect);
	console.log(totalAnswered);

	gameState.totalUnanswered = 6 - totalAnswered; 
	console.log(gameState.totalUnanswered);
	$(".options").append("<div> Unanswered: " + gameState.totalUnanswered + "</div>"); 
	
}

/* Function that grabs the data from the choice that the user selected for the answer. */

function grabSelection () {
	$(".choices-class").click(function () {
		gameState.selection = $(this).text(); 
		console.log(gameState.selection);
		compareAnswers (); 
	}); 

}

/* Function that compares the user's answer to the right answer.  If the user is right, it adds
to the total correct amount.  If the user is wrong, it adds to the total incorrect amount. */

function compareAnswers () {
	if (gameState.selection === questions[presentedQuestion].answers[questions[presentedQuestion].correctAnswer] ) {
		gameState.totalCorrect ++;
		console.log("total Correct: "+ gameState.totalCorrect);
	} else {
		gameState.totalIncorrect ++;
		console.log ("total incorrect: " + gameState.totalIncorrect);
	} 
	showAnswer (); 
}

/* Function that shows the correct answer and runs a different timer that's shorter. */

function showAnswer () {
	clearTimer (); 
	$(".timer").html("<div></div>");
	$(".question-answer").html("<div><h3> Answer: </h3></div>");
	$(".options").html("<div><h2>" + questions[presentedQuestion].answers[questions[presentedQuestion].correctAnswer] + "</h2></div>");
	$(".options").append("<br><div>" + questions[presentedQuestion].answerExp + "</div>");
	$(".picture").html("<img src="+ questions[presentedQuestion].answerPhoto + ">");
	startAnswerTimer (); 
}

/* Function is the shorter timer for just the answer screen. */

function startAnswerTimer () {
	gameState.timer = 8; 
	intervalID = setInterval(countAnswer,1000);
}

/* Function that starts the longer timer for the question screen. */

function startTimer () {
	intervalID = setInterval(count,1000);
}

/* Function that ends the timer. */

function clearTimer () {
	clearInterval(intervalID);
	gameState.timer = 16; 

}

/* Function makes the timer work on the answer screen and when the timer runs out it, it moves on
to the next question. */

function countAnswer () {
	 gameState.timer--;
  	var converted = timeConverter(gameState.timer);
  	if (converted === "00:00") {
  		refreshBoard (); 
  		chooseQuestion (); 
  	}

}

/* Function that makes the timer work on the question screen and when the timer runs out, it moves
on to the next question even if the user hasn't put in an answer. */

function count() {

  gameState.timer--;
  var converted = timeConverter(gameState.timer);
  $(".timer").html(converted);
  	if (converted === "00:00") {
  		refreshBoard (); 
  		chooseQuestion (); 
  		
  	}

}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }


});

/* Pseudo code: 

Object with the questions
var questions : {
	
}

Questions to have attributes (1)name, (2) question, (3) possible 
answers ARRAY, (4) correct answer, which is equal to one of the answers, 
(5) a number to increment as the number of times the question is used goes up.

Need math.floor/math.random to pick 
the questions. 

Need 10 questions.  Should present 6 and then start over the game. 

Function: startGame function onClick of the Start Game button. 
	black screen resets with new question
	values (1) total correct (2) incorrect --- both clear and are not visible
	timer resets

Function: displayQuestion -- on answer display will wait 8 seconds and then show new question

*/
