{
  class Question {
    constructor(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
    }

    ask() {
      this.answers.forEach(answer => {
        console.log(`${answer}`);
      });
    }

    checkAnswer(correct, answer) {
      if (correct === answer) {
        score++;
        if (score > 4) {
          alert("You WIN!!!");
          return false;
        }
        console.log(`You're right! Your score is ${score}`);
        return true;
      } else {
        console.log("Wrong answer, try again please!");
        return true;
      }
    }
  }

  const questionOne = new Question(
    "What is Sammy's middle name? (enter the correct number)",
    ["The Slug - enter 1", "Hercules - enter 2", "William - enter 3"],
    3
  );

  const questionTwo = new Question(
    "What is Sophia's favorite color? (enter the correct number)",
    ["Pink - enter 1", "Cold Pink - enter 2", "Hot Pink - enter 3"],
    1
  );

  const questionThree = new Question(
    "What is Mommy's favorite Season? (enter the correct number)",
    ["Summer - enter 1", "Fall - enter 2", "Spring - enter 3"],
    2
  );

  const questionFour = new Question(
    "What is Daddy's favorite food? (enter the correct number)",
    ["Pizza - enter 1", "Cheese - enter 2", "Burgers - enter 3"],
    3
  );

  const questions = [questionOne, questionTwo, questionThree, questionFour];

  let score = 0;

  function game() {
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
    }
  }

  game();
}
