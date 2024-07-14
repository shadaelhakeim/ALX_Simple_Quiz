function checkAnswer() {
  const correctAnswer = "4";
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
  if (correctAnswer === userAnswer) {
    let feedback = document.getElementById("feedback");
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

let submit = document.getElementById("submit-answer");
submit.addEventListener("click", checkAnswer);

