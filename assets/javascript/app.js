/* Pseudo code: 

Need an object with the questions
var questions : {
	
}

Need the questions to have attributes (1)name, (2) question, (3) possible 
answers ARRAY, (4) correct answer, which is equal to one of the answers, 
(5) a number to increment as the number of times the question is used goes up.

Can the questions object be an array?  Need math.floor/math.random to pick 
the questions. 

Need 10 questions.  Should present 5 and then start over the game. 

*/

var questions = {
	q1: {
		question: "What is the name of the world-class museum pictured in the background here?",
		questionPicture: null,
		answers: ["The Hermitage", "The British Museum", "The Prado", "The Louvre"],
		useCount: "",
		correctAnswer: answers[3],
		answerExp: "The Louvre Museum is the largest museum in the world.",
		answerPhoto: null
	}
	q2: {
		question: "Where is the Louvre?",
		questionPicture: null,
		answers: ["Paris," "London," "Madrid," "Berlin"],
		useCount: "",
		correctAnswer: answers[0],
		answerExp: "The Louvre is a historic landmark in the city of Paris.",
		answerPhoto: "..images/paris_380x244.jpg"
	}
	q3: {
		question: "What is the most famous painting in the Louvre?",
		questionPicture: null, 
		answers: ["The Starry Night," "The Scream", "The Mona Lisa", "The Last Supper"],
		useCount: "",
		correctAnswer: answers[2],
		answerExp: "The Mona Lisa is a portrait of Lisa Gherardini by Leonardo da Vinci, on display in the Louvre since 1797.",
		answerPhoto:"..images/monalisa.jpg"
	}
	q4: {
		question: "The oldest foundations of the Louvre date to which century?",
		questionPicture: ,
		answers: ["19th", "17th", "15th", "12th"],
		useCount: "",
		correctAnswer: answers[3],
		answerExp: "The Louvre was originally built as a fortress in 1190 with a moat to defend against the north.",
		answerPhoto: null
	}
	q5: {
		question: "What event triggered the Louvre becoming a museum?",
		questionPicture: null, 
		answers: ["Joan of Arc led a victory against the British at Orleans", "Louis XIV moved out to Versailles", "Napoleon crowned himself Emperor", "France and the Allies defeated Germany in WWI"],
		useCount: "",
		correctAnswer: answers[1],
		answerExp: "In 1682, Louis XIV left the Louvre as a palace and moved to Versailles. After the French Revolution, the first exhibits in 1793 displayed the royal collection of art.",
		answerPhoto: null
	}
	q6: {
		question: "True or False: The architect who designed the glass pyramid at the Louvre was of at least partial European heritage?",
		questionPicture: null, 
		answers: ["True", "False"],
		useCount: "",
		correctAnswer: answers[1],
		answerExp: "I.M. Pei, a Chinese-born American architect, was chosen by the French President to re-develop the Louvre in the 1980s.  He won the Pritzker Prize, the Nobel Prize for Architecture, in 1983.",
		answerPhoto: null
	}
	q7: {
		question: "What is the most beloved sculpture in the Louvre?",
		questionPicture: null,
		answers: ["Venus de Milo","Winged Victory of Samothrace," "The Dying Slave by Michelangelo", "Psyche Revived by Cupid's Kiss by Antonio Canova"],
		useCount: "",
		correctAnswer: answers[0],
		answerExp: "Venus de Milo is one of the most famous Greek sculptures of all time, created between 130 and 100 B.C., and is always surrounded with vistors.",
		answerPhoto: "..images/venusdemilo.jpg"
	}
	q8: {
		question: "These Lamassu figures in the Louvre from the citadel of Sargon II are from which ancient near eastern civilization?",
		quesitonPicture: , 
		answers: ["Egyptian","Babylonian", "Assyrian", "Greek"],
		useCount: "",
		correctAnswer: answers[2],
		answerExp: "Meant to protect the kingdom from enemy visitors, the Lamassu were imposing symbols of the Assyrian Empire (934-609 B.C.E.).",
		answerPhoto: "..images/lamassu.jpg"
	}
	q9: {
		question: "True or False: The Winged Victory of Samothrace in the Louvre was initially discovered with only one wing.",
		questionPicture: ,
		answers: ["True," "False"],
		useCount: "",
		correctAnswer: answers[0],
		answerExp: "Also called the Nike of Samothrace, her outstretched right wing is a symmetric, plaster version of the original left one.",
		answerPhoto: null
	}
	q10: {
		question: "Liberty Leading the People, in the Louvre, painted by Eugene Delacroix, has come to symbolize which Broadway Musical?",
		questionPicture: ,
		answers: ["Hamilton", "Evita", "Les Miserables", "Man of La Mancha"],
		useCount: "",
		correctAnswer: answers[2],
		answerExp: "Both Liberty Leading the People and Les Miserables, originally a book by Victor Hugo that became a musical, depict the French Revolution.",
		answerPhoto: , 
	}

}

