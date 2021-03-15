function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
  //comment added
}

Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};
