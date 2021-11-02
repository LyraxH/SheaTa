//#region rest
function showImage() {
    var video = document.getElementById('video');
    video.style.visibility = 'visible';

    var img = document.getElementById('hideText');
    img.style.visibility = 'visible';
}
function hideImage() {
    var video = document.getElementById('video');
    video.style.visibility = 'hidden';

    
    var img = document.getElementById('hideText');
    img.style.visibility = 'hidden';
}
function codeAddress() {
    hideImage();
}
//#endregion
//#region Title
function changeTitle() {
    document.getElementById("thisisaquiz").innerHTML = "Please use proper spelling and capitalization";
}
function changeTitleBack() {
    document.getElementById("thisisaquiz").innerHTML = "Quiz";
}
//#endregion

function changeButton() {
    document.getElementById("button").value ="Mark the quiz!";
}
function changeButtonBack() {
    document.getElementById("button").value ="Do you want to mark the quiz?"
}
function markQuiz() {
    var score = 0;

    document.getElementById("button").value = "Marked!";

    if (IquestionOne.value == "Ottawa" || IquestionOne.value == "ottawa") {
        score = score + 1;
        document.getElementById("IquestionOne").style.backgroundColor = "Green";
    }
    else {
        document.getElementById("IquestionOne").style.backgroundColor = "Red";
    }
    if (IquestionTwo.value == "Iceland" || IquestionTwo.value == "iceland") {
        score = score + 1;
        document.getElementById("IquestionTwo").style.backgroundColor = "Green";
    }
    else {
        document.getElementById("IquestionTwo").style.backgroundColor = "Red";
    }
    if(IquestionThree.value == "B Obama" || IquestionThree.value == "Barack Obama" || IquestionThree.value == "Barack O" || IquestionThree.value == "Obama" || IquestionThree.value == "obama" || IquestionThree.value == "Barack" || IquestionThree.value == "barack") {
        score = score + 1;
        document.getElementById("IquestionThree").style.backgroundColor = "Green";
    }
    else {
        document.getElementById("IquestionThree").style.backgroundColor = "Red";
    }
    if (IquestionFour.value == "aotearoa" || IquestionFour.value == "Aotearoa") {
        score = score + 1;
        document.getElementById("IquestionFour").style.backgroundColor = "Green";
    }
    else {
        document.getElementById("IquestionFour").style.backgroundColor = "Red";
    }
    if (IquestionFive.value == "Aphelios" || IquestionFive.value == "aphelios") {
        score = score + 1;
        document.getElementById("IquestionFive").style.backgroundColor = "Green";
    }
    else {
        document.getElementById("IquestionFive").style.backgroundColor = "Red";
    }
    if (IquestionSix.value == "Piltover" || IquestionSix.value == "piltover") {
        score = score + 1;
        document.getElementById("IquestionSix").style.backgroundColor = "Green";
    }
    else {
        document.getElementById("IquestionSix").style.backgroundColor = "Red";
    }

    document.getElementById("responseArea1").innerHTML = ("You got "+score+" out of 6!")

    if (score == 6)
    {
        document.getElementById("responseArea2").innerHTML = ("You did perfect!")
        document.getElementById("responseArea2").style.color = "Green";
    }  
    if (score == 5)
    {
        document.getElementById("responseArea2").innerHTML = ("You did really good")
        document.getElementById("responseArea2").style.color = "DarkGreen";
    }
    if (score == 3 || score == 4)
    {
        document.getElementById("responseArea2").innerHTML = ("You did ok")
        document.getElementById("responseArea2").style.color = "White";
    }
    if (score == 2)
    {
        document.getElementById("responseArea2").innerHTML = ("You did kinda bad")
        document.getElementById("responseArea2").style.color = "Red";
    }
    if (score == 1)
    {
        document.getElementById("responseArea2").innerHTML = ("You did really bad")
        document.getElementById("responseArea2").style.color = "DarkRed";
    }
    if (score == 0)
    {
        document.getElementById("responseArea2").innerHTML = ("You did awful")
        document.getElementById("responseArea2").style.color = "Black";
    }
}

//#region QuestionOne
function changeQ1()
{
    document.getElementById("questionOne").innerHTML = "Canada?";
    document.getElementById("questionOne").style.color = "Red";
}
function changeQ1Back()
{
    document.getElementById("questionOne").innerHTML = "What is the capital of";
    document.getElementById("questionOne").style.color = "White";
}
//#endregion
//#region QuestionTwo
function changeQ2()
{
    document.getElementById("questionTwo").innerHTML = "being held?";
    document.getElementById("questionTwo").style.color = "DarkGreen";
}
function changeQ2Back()
{
    document.getElementById("questionTwo").innerHTML = "Where is the League of legends world championship";
    document.getElementById("questionTwo").style.color = "White";
}
//#endregion
//#region QuestionThree
function changeQ3()
{
    document.getElementById("questionThree").innerHTML = "president?";
    document.getElementById("questionThree").style.color = "Blue";
}
function changeQ3Back()
{
    document.getElementById("questionThree").innerHTML = "Who is the first black";
    document.getElementById("questionThree").style.color = "White";
}
//#endregion
//#region QuestionFour
function changeQ4()
{
    document.getElementById("questionFour").innerHTML = "Maori?";
    document.getElementById("questionFour").style.color = "Black";
}
function changeQ4Back()
{
    document.getElementById("questionFour").innerHTML = "What is New Zealand in";
    document.getElementById("questionFour").style.color = "White";
}
//#endregion
//#region QuestionFive
function changeQ5()
{
    document.getElementById("questionFive").innerHTML = "Moonlight Vigil?";
    document.getElementById("questionFive").style.color = "Blue";
}
function changeQ5Back()
{
    document.getElementById("questionFive").innerHTML = "What champion has the ultimate";
    document.getElementById("questionFive").style.color = "White";
}
//#endregion
//#region QuestionSix
function changeQ6()
{
    document.getElementById("questionSix").innerHTML = "The City of Progress?";
    document.getElementById("questionSix").style.color = "Grey";
}
function changeQ6Back()
{
    document.getElementById("questionSix").innerHTML = "Which city is known as";
    document.getElementById("questionSix").style.color = "White";
}
//#endregion