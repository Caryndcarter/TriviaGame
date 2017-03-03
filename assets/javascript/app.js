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

	$(".triviaboard").hide();

	$(".start").click(function () {
		$(".triviaboard").show();
		startGame(); 
	});	

var questions = [
	{
		question: "What is the name of the world-class museum pictured in the background?",
		questionNumber: 0,
		questionPicture: null,
		answers: ["The Hermitage", "The British Museum", "The Prado", "The Louvre"],
		useCount: 0,
		correctAnswer: 3,
		answerExp: "The Louvre Museum is the largest museum in the world.",
		answerPhoto: null
	},
	{
		question: "Where is the Louvre?",
		questionNumber: 1,
		questionPicture: null,
		answers: ["Paris", "London", "Madrid", "Berlin"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "The Louvre is a historic landmark in the city of Paris.",
		answerPhoto: "../images/paris_380x244.jpg"
	},
	{
		question: "What is the most famous painting in the Louvre?",
		questionNumber: 2,
		questionPicture: null, 
		answers: ["The Starry Night", "The Scream", "The Mona Lisa", "The Last Supper"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "The Mona Lisa is a portrait of Lisa Gherardini by Leonardo da Vinci, on display in the Louvre since 1797.",
		answerPhoto:"../images/monalisa.jpg"
	},
	{
		question: "The oldest foundations of the Louvre date to which century?",
		questionNumber: 3,
		questionPicture: null,
		answers: ["19th", "17th", "15th", "12th"],
		useCount: 0,
		correctAnswer: 3,
		answerExp: "The Louvre was originally built as a fortress in 1190 with a moat to defend against the north.",
		answerPhoto: null
	},
	{
		question: "What event triggered the Louvre becoming a museum?",
		questionNumber: 4, 
		questionPicture: null, 
		answers: ["Joan of Arc led a victory against the British at Orleans", "Louis XIV moved out to Versailles", "Napoleon crowned himself Emperor", "France and the Allies defeated Germany in WWI"],
		useCount: 0,
		correctAnswer: 1,
		answerExp: "In 1682, Louis XIV left the Louvre as a palace and moved to Versailles. After the French Revolution, the first exhibits in 1793 displayed the royal collection of art.",
		answerPhoto: null
	},
	{
		question: "True or False: The architect who designed the glass pyramid at the Louvre was of at least partial European heritage?",
		questionNumber: 5,
		questionPicture: null, 
		answers: ["True", "False"],
		useCount: 0,
		correctAnswer: 1,
		answerExp: "I.M. Pei, a Chinese-born American architect, was chosen by the French President to re-develop the Louvre in the 1980s.  He won the Pritzker Prize, the Nobel Prize for Architecture, in 1983.",
		answerPhoto: null
	},
	{
		question: "What is the most beloved sculpture in the Louvre?",
		questionNumber: 6,
		questionPicture: null,
		answers: ["Venus de Milo","Winged Victory of Samothrace", "The Dying Slave by Michelangelo", "Psyche Revived by Cupid's Kiss by Antonio Canova"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "Venus de Milo is one of the most famous Greek sculptures of all time, created between 130 and 100 B.C., and is always surrounded with vistors.",
		answerPhoto: "../images/venusdemilo.jpg"
	},
	{
		question: "These Lamassu figures from the citadel of Sargon II are from which ancient near eastern civilization?",
		questionNumber: 7, 
		quesitonPicture: "../images/lamassu.jpg", 
		answers: ["Egyptian","Babylonian", "Assyrian", "Greek"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "Meant to protect the kingdom from enemy visitors, the Lamassu were imposing symbols of the Assyrian Empire (934-609 B.C.E.).",
		answerPhoto: null
	},
	{
		question: "True or False: The Winged Victory of Samothrace was initially discovered with only one wing.",
		questionNumber: 8, 
		questionPicture: null,
		answers: ["True", "False"],
		useCount: 0,
		correctAnswer: 0,
		answerExp: "Also called the Nike of Samothrace, her outstretched right wing is a symmetric, plaster version of the original left one.",
		answerPhoto: null
	},
	{
		question: "Liberty Leading the People, painted by Eugene Delacroix, has been associated which Broadway Musical?",
		questionNumber: 9,
		questionPicture: null,
		answers: ["Hamilton", "Evita", "Les Miserables", "Man of La Mancha"],
		useCount: 0,
		correctAnswer: 2,
		answerExp: "Both Liberty Leading the People and Les Miserables, originally a novel by Victor Hugo that became a musical, depict the French Revolution.",
		answerPhoto: "../images/libertysing.jpg" 
	}

];

var gameState = {
	totalCorrect: 0,
	totalIncorrect: 0,
	totalUnanswered: 0, 
	currentQuestion: "",
	totalQuestionCount: 0,
	timer: 10,
}

function chooseQuestion () {
	var presentedQuestion = Math.floor(Math.random(0 - 10) * 10);
	console.log(presentedQuestion);

	if(questions[presentedQuestion].useCount === 0) {
		$(".question-answer").html(questions[presentedQuestion].question);
			for (var i = 0; i < questions[presentedQuestion].answers.length; i++) {
				$(".options").append("<div>" + questions[presentedQuestion].answers[i] + "</div>"); 
			}
		questions[presentedQuestion].useCount++;

	} else {
		chooseQuestion (); 
	}

	console.log(questions[presentedQuestion].useCount);
	
}

function startGame ()	{
	$(".question-answer").html("<div></div>");
	$(".options").html("<div></div>");
	for (var i = 0; i < questions.length; i++) {
		questions[i].useCount === 0; 
	}
	chooseQuestion(); 
}

function resetQuestions () {

}


});
