// Global Variable Declarations

var incorrect = 0;
var correct = 0;
var retry = 3;
var total = 1;


// Reset Inputs

function resetInput() {
    document.getElementById("guessInput").value = "";
}


// Question check function

function question() {
    "use strict";
    // Variable Declarations
    var answer = 10;
    var guess = document.getElementById("guessInput").value;
    document.getElementById("continueButton").setAttribute("onclick", "question1Pre()");

    // Test Answer vs Input

    if (answer == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}

// Setup for next Question

function question1Pre() {

    // Variable Declarations / Reset

    total = total + 1;
    retry = 3;
    var question = "x + 12 = 13";

    // Reset Disabled/Enabled Elements

    document.getElementById("question").innerHTML = question;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";
    document.getElementById("submit").setAttribute("onclick", "question1()");
    document.getElementById("questionCounterNum").innerHTML = total;

}

// Question check function

function question1() {
    "use strict";
    // Variable Declarations
    var answer = 1;
    var guess = document.getElementById("guessInput").value;
    document.getElementById("continueButton").setAttribute("onclick", "question2Pre()");

    // Test Answer vs Input

    if (parseInt(answer) == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}

// Setup for next Question

//                                     CHANGE NUMBER
function question2Pre() {

    // Variable Declarations / Reset

    total = total + 1;
    retry = 3;

    //                                 CHANGE QUESTION
    var question = "5(6 + 2)";

    // Reset Disabled/Enabled Elements

    document.getElementById("question").innerHTML = question;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";
    document.getElementById("submit").setAttribute("onclick", "question2()");
    document.getElementById("questionCounterNum").innerHTML = total;

}

// Question check function

//                                     CHANGE NUMBER
function question2() {
    "use strict";
    // Variable Declarations

    //                               CHANGE ANSWER
    var answer = 40;
    var guess = document.getElementById("guessInput").value;
    document.getElementById("continueButton").setAttribute("onclick", "question3Pre()");

    // Test Answer vs Input

    if (parseInt(answer) == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}

// Setup for next Question

//                                     CHANGE NUMBER
function question3Pre() {

    // Variable Declarations / Reset

    total = total + 1;
    retry = 3;

    //                                 CHANGE QUESTION
    var question = "8 x 2";

    // Reset Disabled/Enabled Elements

    document.getElementById("question").innerHTML = question;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";

    //                                                         CHANGE NUMBER
    document.getElementById("submit").setAttribute("onclick", "question3()");
    document.getElementById("questionCounterNum").innerHTML = total;

}

// Question check function

//                                     CHANGE NUMBER
function question3() {
    "use strict";
    // Variable Declarations

    //                               CHANGE ANSWER
    var answer = 16;
    var guess = document.getElementById("guessInput").value;
    //                                                                   CHANGE NUMBER
    document.getElementById("continueButton").setAttribute("onclick", "question4Pre()");

    // Test Answer vs Input

    if (parseInt(answer) == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}

// Setup for next Question

//                                     CHANGE NUMBER
function question4Pre() {

    // Variable Declarations / Reset

    total = total + 1;
    retry = 3;

    //                                 CHANGE QUESTION
    var question = "7 - 8";

    // Reset Disabled/Enabled Elements

    document.getElementById("question").innerHTML = question;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";

    //                                                         CHANGE NUMBER
    document.getElementById("submit").setAttribute("onclick", "question4()");
    document.getElementById("questionCounterNum").innerHTML = total;

}

// Question check function

//                                     CHANGE NUMBER
function question4() {
    "use strict";
    // Variable Declarations

    //                               CHANGE ANSWER
    var answer = -1;
    var guess = document.getElementById("guessInput").value;
    //                                                                   CHANGE NUMBER
    document.getElementById("continueButton").setAttribute("onclick", "question5Pre();");

    // Test Answer vs Input

    if (parseInt(answer) == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}

// Setup for next Question

//                                     CHANGE NUMBER
function question5Pre() {

    // Variable Declarations / Reset

    total = total + 1;
    retry = 3;

    //                                 CHANGE QUESTION
    var question = "6 + 18";

    // Reset Disabled/Enabled Elements

    document.getElementById("question").innerHTML = question;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";

    //                                                         CHANGE NUMBER
    document.getElementById("submit").setAttribute("onclick", "question5()");
    document.getElementById("questionCounterNum").innerHTML = total;

}

// Question check function

//                                     CHANGE NUMBER
function question5() {
    "use strict";
    // Variable Declarations

    //                               CHANGE ANSWER
    var answer = 24;
    var guess = document.getElementById("guessInput").value;
    //                                                                   CHANGE NUMBER
    document.getElementById("continueButton").setAttribute("onclick", "question6Pre();");

    // Test Answer vs Input

    if (parseInt(answer) == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}

// Setup for next Question

//                                     CHANGE NUMBER
function question6Pre() {

    // Variable Declarations / Reset

    total = total + 1;
    retry = 3;

    //                                 CHANGE QUESTION
    var question = "15 / 3";

    // Reset Disabled/Enabled Elements

    document.getElementById("question").innerHTML = question;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";

    //                                                         CHANGE NUMBER
    document.getElementById("submit").setAttribute("onclick", "question6()");
    document.getElementById("questionCounterNum").innerHTML = total;

}

// Question check function

//                                     CHANGE NUMBER
function question6() {
    "use strict";
    // Variable Declarations

    //                               CHANGE ANSWER
    var answer = 5;
    var guess = document.getElementById("guessInput").value;
    //                                                                   CHANGE NUMBER
    document.getElementById("continueButton").setAttribute("onclick", "question7Pre();");

    // Test Answer vs Input

    if (parseInt(answer) == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}
// Setup for next Question

//                                     CHANGE NUMBER
function question7Pre() {

    // Variable Declarations / Reset

    total = total + 1;
    retry = 3;

    //                                 CHANGE QUESTION
    var question = "x + 4 = 23";

    // Reset Disabled/Enabled Elements

    document.getElementById("question").innerHTML = question;
    document.getElementById("submit").removeAttribute("disabled");
    document.getElementById("guessInput").removeAttribute("disabled");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";

    //                                                         CHANGE NUMBER
    document.getElementById("submit").setAttribute("onclick", "question7()");
    document.getElementById("questionCounterNum").innerHTML = total;

}

// Question check function

//                                     CHANGE NUMBER
function question7() {
    "use strict";
    // Variable Declarations

    //                               CHANGE ANSWER
    var answer = 19;
    var guess = document.getElementById("guessInput").value;
    //                                                                   CHANGE NUMBER
    document.getElementById("continueButton").setAttribute("onclick", "average();");

    // Test Answer vs Input

    if (parseInt(answer) == parseInt(guess)) {
        document.getElementById("feedback").style.backgroundColor = "green";
        document.getElementById("feedback").innerHTML = "CORRECT!";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        correct = correct + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    } else {
        retry = parseInt(retry) - 1;
        document.getElementById("feedback").style.backgroundColor = "red";
        document.getElementById("feedback").innerHTML = "INCORRECT";
        document.getElementById("feedback").style.display = "inline-block";
        document.getElementById("retries").innerHTML = retry;
        document.getElementById("retriesWrapper").style.display = "inline-block";
        setTimeout(resetInput(), 10);
    }
    if (parseInt(retry) == 0) {
        document.getElementById("submit").setAttribute("disabled", "disabled");
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
        incorrect = incorrect + 1;
        document.getElementById("continueButton").style.display = "initial";
        setTimeout(resetInput(), 10);
    }

}





// Calculate Average Grade 
function average() {
    var avg = (correct / total) * 100;
    var avgLetter = "";

    if (parseInt(avg) >= 90 ) {
        avgLetter = "A";
    } else {
        if (parseInt(avg) >= 80 && parseInt(avg) <= 89) {
            avgLetter = "B";
        } else {
            if (parseInt(avg) >= 70 && parseInt(avg) <= 79) {
                avgLetter = "C";
            } else {
                if (parseInt(avg) >= 65 && parseInt(avg) <= 69) {
                    avgLetter = "D";
                } else {
                    if (parseInt(avg) <= 64) {
                        avgLetter = "F";
                    } else {
                
                    }
                }
            }
        }
    }
    document.getElementById("retriesWrapper").style.display = "none";
    document.getElementById("continueButton").style.display = "none";
    document.getElementById("feedback").innerHTML = "You Scored " + avg.toFixed(1) + "<br> Or A(N)  " + avgLetter;
}