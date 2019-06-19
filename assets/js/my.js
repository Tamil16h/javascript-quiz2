function submitAnswers(){
    var total = 10;
    var score = 0;
//Get user input
    var q1 = document.forms["quizForm"] ["q1"].value;
	 console.log(q1);
    var q2 = document.forms["quizForm"] ["q2"].value;
    var q3 = document.forms["quizForm"] ["q3"].value;
    var q4 = document.forms["quizForm"] ["q4"].value;
    var q5 = document.forms["quizForm"] ["q5"].value;
	  var q6 = document.forms["quizForm"] ["q6"].value;
	    var q7 = document.forms["quizForm"] ["q7"].value;
		  var q8 = document.forms["quizForm"] ["q8"].value;
		    var q9 = document.forms["quizForm"] ["q9"].value;
			  var q10 = document.forms["quizForm"] ["q10"].value;
   var JSON = [{"answer":"int a = Math.abs(-5)"},
{"answer":"class, if"},
{"answer":"int [] myList = {1, 2, 3}"},{"question":"Which is a reserved word in the Java programming language?","options":[" method","native"," subclasses"," array"],"answer":"subclasses"},{"answer":"Float"},
{"answer":"int a [] = new int[5]"},{"answer":"public final double methoda()"},
{"answer":"boolean b4 = Boolean.false()"},{"answer":"String s1 = null"},{"answer":"0 to 32767"},];
console.log(JSON)

// Validation
  for(var i = 1; i<= total; i++){
          if( eval('q' + i) == null || eval('q' + i) == ''){
        alert("you missed question " + i);
        return false;
    }
  }
    
    //set answers
    var answers = ["b", "d", "c", "a", "b","c","a","b","b","a"]
    
    //check answers
    for(var i = 1; i<= total; i++){
        if(eval('q' + i) == answers [i - 1]){
			
            score++;
        }
		console.log(answers [i-1])
    }
      alert('You scored ' + score + " out of " + total);
    //display results
    var results = document.getElementById('results');
    resutls.innerHTML= '<h3> You scored <span' + score + '</span> out of <span>' + total + '</span></h3>';
    
  
    
    return false;
}

function muyh() {
 document.getElementById('qui').style.display='block';
 document.getElementById('hello').style.display='none';
 myTimer = setInterval(myCounter, 1000);
var fiveMinutes = 01 * 60,
       display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
 }
 var c = 0;
function myCounter() {
    document.getElementById("do").innerHTML = ++c;
}
function nextscore50() {
document.getElementById('finalcoop').style.display='block';
document.getElementById('qui').style.display='none';
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            document.write("<h2>Time Expired!!<h2>");
document.getElementById('qui').style.display='none';
document.getElementById('timeuppage').style.display='block';
        }
    }, 1000);
}
function tryagain() {
location.reload();
}
Collapse


