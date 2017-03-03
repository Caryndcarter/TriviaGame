/* Pseudo code: 

Object with the questions
var questions : {
	
}

Questions to have attributes (1)name, (2) question, (3) possible 
answers ARRAY, (4) correct answer, which is equal to one of the answers, 
(5) a number to increment as the number of times the question is used goes up.

Need math.floor/math.random to pick 
the questions. 

Need 10 questions.  Should present 5 and then start over the game. 

Function: startGame function onClick of the Start Game button. 
	black screen resets with new question
	values (1) total correct (2) incorrect --- both clear and are not visible
	timer resets

Function: displayQuestion -- on answer display will wait 3 seconds and then show new question

*/

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
		answerExp: "The Louvre Museum is the largest museum in the world.",
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
		answerPhoto: "../triviagame/assets/images/rsz_paris_380x244.jpg"
	},
	{
		question: "What is the most famous painting in the Louvre?",
		questionNumber: 2,
		questionPicture: "", 
		answers: ["The Starry Night", "The Scream", "The Mona Lisa", "The Last Supper"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "The Mona Lisa is a portrait of Lisa Gherardini by Leonardo da Vinci, on display in the Louvre since 1797.",
		answerPhoto:"../triviagame/assets/images/rsz_monalisa.jpg"
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
		answerExp: "In 1682, Louis XIV left the palatial Louvre and moved to Versailles. After the French Revolution, the first exhibits in 1793 displayed the royal collection of art.",
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
		answerPhoto: "../triviagame/assets/images/rsz_venusdemilo.jpg"
	},
	{
		question: "These Lamassu figures from the citadel of Sargon II, on display in the Louvre, are from which ancient near eastern civilization?",
		questionNumber: 7, 
		questionPicture: "../triviagame/assets/images/lamassu.jpg", 
		answers: ["Egyptian","Babylonian", "Assyrian", "Greek"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "Meant to protect the kingdom from enemy visitors, the Lamassu were imposing symbols of the Assyrian Empire (934-609 B.C.E.).",
		answerPhoto:""
	},
	{
		question: "True or False: Created in the 2nd century B.C., the Winged Victory of Samothrace was initially discovered with only one wing.",
		questionNumber: 8, 
		questionPicture: "../triviagame/assets/images/rsz_samothrace.jpg",
		answers: ["True", "False"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "Also called the Nike of Samothrace, Winged Victory's outstretched right wing is a symmetric, plaster version of the original left one.",
		answerPhoto: ""
	},
	{
		question: "A well-known Louvre piece, Liberty Leading the People, painted by Eugene Delacroix in 1830, has been associated which Broadway Musical?",
		questionNumber: 9,
		questionPicture: "../triviagame/assets/images/rsz_1libertyleading.jpg",
		answers: ["Hamilton", "Evita", "Les Miserables", "Man of La Mancha"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "Victor Hugo's novel, Les Miserables (also a musical), and Liberty Leading the People both depict the French Revolution.",
		answerPhoto: "../triviagame/assets/images/rsz_1libertysing.jpg" 
	}

];

var presentedQuestion = "";

var gameState = {
	totalCorrect: 0,
	totalIncorrect: 0,
	totalUnanswered: 0, 
	currentQuestion: "",
	totalQuestionCount: 0,
	selection : "",
	timer: 10,
}

function beginning () {
	$(".triviaboard").hide();

	$(".start").click( function() {
		$(".triviaboard").show ();
		startGame(); 
	});
}

function startGame () {	
	refreshBoard (); 
	chooseQuestion();
}

function chooseQuestion () {
	presentedQuestion = Math.floor(Math.random(0 - 10) * 10);
	console.log("presented question:" + presentedQuestion);

	if (gameState.totalQuestionCount < 6) {
		if(questions[presentedQuestion].useCount === 0) {
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
		// alert ("Game Over");
		refreshBoard (); 
		showStats();
	}

	console.log("use count: " + questions[presentedQuestion].useCount);
	console.log("total # of q's: " + gameState.totalQuestionCount);
}


function refreshBoard () {
	gameState.totalQuestionCount === 0;
	$(".picture").html("<div></div>");
	$(".question-answer").html("<div></div>");
	$(".options").html("<div></div>");
	for (var i = 0; i < 10; i++) {
		questions[i].useCount === 0; 
	}
}

function showStats () {
	$(".question-answer").html("<div><h2> Game Over </h2></div>");
	$(".options").html("<div> Correct: " + gameState.totalCorrect + "</div>");
	$(".options").append("<div> Incorrect: " + gameState.totalIncorrect + "</div>");
	$(".options").append("<div> Unanswered: " + gameState.totalUnanswered + "</div>"); 
}


function grabSelection () {
	$(".choices-class").click(function () {
	// alert("I'm chosing here!");
		gameState.selection = $(this).text(); 
		console.log(gameState.selection);
		compareAnswers (); 
	}); 

}

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


function showAnswer () {
	$(".question-answer").html("<div><h3> Answer: </h3></div>");
	$(".options").html("<div><h2>" + questions[presentedQuestion].answers[questions[presentedQuestion].correctAnswer] + "</h2></div>");
	$(".options").append("<br><div>" + questions[presentedQuestion].answerExp + "</div>");
	$(".picture").html("<img src="+ questions[presentedQuestion].answerPhoto + ">");
}




});
