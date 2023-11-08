let answers = [
	'Зеленого',
	'Париж',
	'Юпітер',
];

function checkAnswers() {
  let inputs = document.querySelectorAll('#test input');

  for (let i = 0; i < inputs.length; i++) {
    const userAnswer = inputs[i].value;
    const correctAnswer = answers[i];

    if(userAnswer == correctAnswer) {
      inputs[i].classList.add('right'); 
    } else {
      inputs[i].classList.add('wrong'); 
    }
  }
}