function populate()
{
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show Question
       var element = document.getElementById("Question123");
        element.innerHTML = quiz.getQuestionIndex().text;           ;

        var choices = quiz.getQuestionIndex().choices;
        for(i=0;i<choices.length;i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            showProgress();
            guess("btn" + i, choices[i]);   
        }
    }
};

function showProgress(){
    var number = quiz.questionIndex+1;
    var current = document.getElementById("progress");
    current.innerHTML = "Question "+number+" of " + quiz.questions.length; 
}

function guess(id , guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}


function showScores(){
    var scoreHTML = "<h1> Result </h1>";
    scoreHTML += "<h2 id='score'> Final Score is: " + quiz.score+"</h2>";
    var element = document.getElementById("mainbox");
    element.innerHTML = scoreHTML;
};

var questions = [
    new Question("Which one is smallest city in world?", ["New Mexico", "Lebanon", "Vatican City", "Venezuela"], "Vatican City"),
    new Question("Which one is not an Object Oriented Language?", ["HTML", "Python", "JavaScript", "C#"], "HTML"),
    new Question("In which language Quran is written?", ["Hebrew", "Persian", "Arabic", "English"], "Arabic"),
    new Question("Capital of Canada is:", ["Ottawa", "Ontario", "Torronto", "New Orleans"], "Ottawa"),
    new Question("What is the name of biggest ocean in the world?", ["Pacific Ocean", "Atlantic Ocean", "Antarctic Ocean", "Indian Ocean"], "Pacific Ocean")
];

var quiz = new Quiz(questions);
populate();