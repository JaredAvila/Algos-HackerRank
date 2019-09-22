//ES6
{
  class Question {
    constructor(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
    }

    ask() {
      this.answers.forEach((answer, index) => {
        console.log(`${index + 1}: ${answer}`);
      });
    }

    checkAnswer(correct, answer) {
      let newScore;
      if (correct === answer) {
        newScore = updateScore(true);
        if (newScore > 4) {
          alert("You WIN!!!");
          return false;
        }
        console.log(`You're right!`);
      } else {
        newScore = updateScore(false);
        console.log("Wrong answer, try again please!");
      }
      this.displayScore(newScore);
      return true;
    }
    displayScore(updatedScore) {
      console.log(`Your current score is ${updatedScore}.`);
      console.log("-----------------------------------");
    }
  }

  const questionOne = new Question(
    "What is Sammy's middle name? (enter the correct number)",
    ["The Slug", "Hercules", "William"],
    3
  );

  const questionTwo = new Question(
    "What is Sophia's favorite color? (enter the correct number)",
    ["Pink", "Cold Pink", "Hot Pink"],
    1
  );

  const questionThree = new Question(
    "What is Mommy's favorite Season? (enter the correct number)",
    ["Summer", "Fall", "Spring"],
    2
  );

  const questionFour = new Question(
    "What is Daddy's favorite food? (enter the correct number)",
    ["Pizza", "Cheese", "Burgers"],
    3
  );

  const questions = [questionOne, questionTwo, questionThree, questionFour];

  const score = () => {
    let sc = 0;
    return correct => {
      if (correct) {
        sc++;
      }
      return sc;
    };
  };

  const updateScore = score();

  const game = () => {
    let num = Math.floor(Math.random() * 4);
    questions[num].ask();
    let answer = prompt(questions[num].question);
    if (answer === "quit") {
      console.log("You have quit the game");
      return;
    } else {
      answer = parseInt(answer);
    }
    let play = questions[num].checkAnswer(answer, questions[num].correct);
    if (play) {
      setTimeout(() => {
        game();
      }, 2000);
    } else {
      console.log("Game Over");
    }
  };

  game();
}

//ES5

// (function() {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }

//   Question.prototype = {
//     ask: function() {
//       this.answers.forEach(answer => {
//         console.log(answer);
//       });
//     },

//     checkAnswer: function(correct, answer) {
//       if (correct === answer) {
//         score++;
//         if (score > 4) {
//           alert("You WIN!!!");
//           return false;
//         }
//         console.log("You're right! Your score is " + score);
//         return true;
//       } else {
//         console.log("Wrong answer, try again please!");
//         return true;
//       }
//     }
//   };

//   var questionOne = new Question(
//     "What is Sammy's middle name? (enter the correct number)",
//     ["The Slug - enter 1", "Hercules - enter 2", "William - enter 3"],
//     3
//   );

//   var questionTwo = new Question(
//     "What is Sophia's favorite color? (enter the correct number)",
//     ["Pink - enter 1", "Cold Pink - enter 2", "Hot Pink - enter 3"],
//     1
//   );

//   var questionThree = new Question(
//     "What is Mommy's favorite Season? (enter the correct number)",
//     ["Summer - enter 1", "Fall - enter 2", "Spring - enter 3"],
//     2
//   );

//   var questionFour = new Question(
//     "What is Daddy's favorite food? (enter the correct number)",
//     ["Pizza - enter 1", "Cheese - enter 2", "Burgers - enter 3"],
//     3
//   );

//   var questions = [questionOne, questionTwo, questionThree, questionFour];

//   let score = 0;

//   function game() {
//     var num = Math.floor(Math.random() * 4);
//     questions[num].ask();
//     var answer = prompt(questions[num].question);
//     if (answer === "quit") {
//       console.log("You have quit the game");
//       return;
//     } else {
//       answer = parseInt(answer);
//     }
//     var play = questions[num].checkAnswer(answer, questions[num].correct);
//     if (play) {
//       setTimeout(function() {
//         game();
//       }, 2000);
//     } else {
//       console.log("Game Over");
//     }
//   }

//   game();
// })();
