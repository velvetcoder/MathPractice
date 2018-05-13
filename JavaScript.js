var operators = ['+', '-'];

function randomNum() {    
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    oper = document.getElementById("operator");
    answer = document.getElementById("answer");
    rnum1 = Math.floor((Math.random() * 999) + 201);
    rnum2 = Math.floor((Math.random() * 200) + 10);
    op = operators[Math.floor(Math.random() * 2)];
    num1.innerHTML = rnum1;
    num2.innerHTML = rnum2;
    oper.innerHTML = op;
    answer.innerHTML = eval(rnum1 + op + rnum2);
    
}

function myVisible() {
    var x = document.getElementById("answer");
    
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    }
}

var myGoodArray = ['Good Job, That is correct!', 'Awesome Sauce, You did it!', 'Yippy, That is right!'];
var myBadArray = ['Let us Try Again', 'Bummer, you can do it', 'Keep trying'];
var randGood = Math.floor(Math.random() * myGoodArray.length);
var randBad = Math.floor(Math.random() * myBadArray.length);
var score = 0;
function checkMath() {
    var userInput = document.getElementById("userAnswer").value;
    answer = document.getElementById("answer");
    
    if (userInput == eval(rnum1 + op + rnum2)) {
        function randomGoodString() {
            document.getElementById("demo").innerHTML = myGoodArray[randGood];
        }     
        randomGoodString();
        document.getElementById("btnNext").style = "visibility:visible;";
        score++;
        document.getElementById("submit").disabled = true; //Disables submit button after correct answer
    } else {
        function randomBadString() {
            document.getElementById("demo").innerHTML = myBadArray[randBad];
        }
        randomBadString();
        document.getElementById("answer").style = "visibility:hidden;";        
    }
    
    document.getElementById("score").innerHTML = "Correct Answers: " + score;
    return score;
}

function myFunction() {
    myVisible();
    checkMath();    
}

function myClear() {
    document.getElementById("myForm").reset();
    document.getElementById("demo").innerHTML = "";
    document.getElementById("btnNext").style = "visibility:hidden;";
    document.getElementById("answer").style = "visibility:hidden;";
    randomNum();
    document.getElementById("submit").disabled = false; //Enables submit button after correct answer
}



