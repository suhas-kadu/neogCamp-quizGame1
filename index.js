var readlineSync = require('readline-sync');
const chalk = require('chalk')

var name = readlineSync.question
("----Welocome----\nPlease enter your name ");
let score = 0;
console.log(`Hello ${name}`);

var highestScorer = {
  bestScore: 4,
  name: "Suhas Kadu", 
};

var questions = [
{
  question: "Where does Suhas live ?\nPune\nMumbai\nNagpur\nYour answer: ",
  answer: "Pune",
  },
  {
  question:"What does Suhas loves to eat ?\nPizza\nPaneer\nVeg Biryani\nYour answer: ",
  answer: "Veg Biryani",
  },
  {
    question: "Which is the favourite color of Suhas ?\nBlue\nRed\nBlack\nYour answer: ",
  answer: "Blue",
  },
  {
  question: "What is the strength of Suhas ?\nCoding\nChess\nTeasing others\nYour answer: ",
  answer: "Teasing others",
  },
  {
  question: "What is the weakness of Suhas ?\nArrogant behaviour\nOver Confidence\nOverthinking\nYour answer: ",
  answer: "Over Confidence",
  }
];

const quiz = (questions) => {
  for(let i = 0; i < questions.length; i++){
    var userAnswer = readlineSync.question(questions[i].question);
    if(userAnswer == questions[i].answer) {
      console.log("\nRight!");
      score++;
    }
    else{
      console.log("\nWrong");
      score--;
    }
    console.log(`Score: ${score}\n`);
  }
  console.log(`Your Score: ${score}`);
  console.log(`Highest Score: ${highestScorer.bestScore}`)

if(score > highestScorer.bestScore){
  console.log("\nCongrajulations! You have beaten the Highest score\nPlease send us screenshot")
  } else if (score < highestScorer.bestScore) {
    console.log("\nBetter luck next time");
  } else {
    console.log("Well done! But Please try again")
  }



}

quiz(questions)