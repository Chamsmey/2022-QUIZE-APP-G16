

//CREATE HEADER
let header = document.createElement('header');
document.body.appendChild(header);

//CREATE DIV CLASS logo-image
let logoImage = document.createElement('div');
logoImage.className = 'logo-image';
header.appendChild(logoImage);

//CREATE IMG ID logo 
let img = document.createElement('img');
img.setAttribute('src','images/logo.png');
img.id = 'logo';
logoImage.appendChild(img);

//CREATE SPAN 
let nameGroup = document.createElement('span');
nameGroup.textContent = 'QUIZ-APP-G16';
logoImage.appendChild(nameGroup);

//CREATE DIV CLASS menu
let menu = document.createElement('div');
menu.className = 'menu';
header.appendChild(menu);

//CREATE DIV CLASS create-btn
let btnCreateQuiz = document.createElement('div');
btnCreateQuiz.className = 'create-btn';
btnCreateQuiz.textContent = 'Create Quiz';
menu.appendChild(btnCreateQuiz);

//CREATE DIV CLASS quiz-btn
let btnQuiz = document.createElement('div');
btnQuiz.className = 'quiz-btn';
btnQuiz.textContent = 'Quiz'
btnQuiz.addEventListener("click", hideOther)
menu.appendChild(btnQuiz);

// CREATE FUNCTION TO CHECK ALL ANSWERS ARE HAVE BEEN INPUT OR NOT
let ansers = document.getElementsByName('inputAnswer');
function validAnswer() {
    for (let value of ansers) {
        if (value.value === '') {
            return false;
        };
    }
    return true;
}

// CREATE FUNCTION TO CHECK THE CORRECT ANSWER IS CHECK OR NOT
let checkRadio = document.getElementsByClassName('answer')
function validRadio() {
    for (let value of checkRadio) {
        if (value.checked) {
            return true;
        }
    }
    return false;
}

// CREATE FUNCTION TO SHOW THE QUESTIONS
function ShowQuestions(event) {
    event.preventDefault();

    // CHECK IF ALL INPUT IS VALID
    if (getQuestion.value !== '' && validAnswer() && validRadio() && topic.value !== '') {

        // CREATE DICTIONARY TO STORE QUESTION AND ANSWER
        let dataQus = {};
    
        // GET KEY QUESTION AND SCORE ---------------
        dataQus.question = getQuestion.value;
        dataQus.score = getScore.value;
        
        // GET KEY ANSWERS -----------
        let answers =[];
        let indexOfanswer = 0;
        for (let answer of getAnswer) {
            if (answer.checked) {
                dataQus.correct = indexOfanswer;   
            }
            answers.push(answer.nextElementSibling.value);
            indexOfanswer += 1;
        };

        dataQus.answers=answers;

        // add data to main data 
        datas.push(dataQus);


        // ASSIGN ALL INPUT TO AN EMPTY
        getQuestion.value = '';
        for (let input of ansers) {
            input.value = '';
        }
        for (let radio of checkRadio) {
            radio.checked = false;
        }

        // CALL FUNCTION TO DISPLAY QUESTION
        displayQuest();
    }else {
        window.confirm('You have to fill all datas')
    }
}
function displayQuest() {
    computeScore.style.display = "none";
    disGBanswer.style.display = 'none';
    // containQuest.removeChild(containQuest.lastElementChild);
    let deleteUl = document.querySelector('.contain-quest ul');
    deleteUl.remove();
    let  ul = document.createElement('ul');
    let  deleteId = 0;
    containQuest.appendChild(ul);
    for (let value of datas) {
        // CREATE LI TO CONTAIN QUESTIONS
        let li = document.createElement("li");

        // CREATE SPAN CLASSNAME contant-qus TO CONTAIN QUESTION
        let question = document.createElement("span");
        question.className = "contant-qus";
        question.textContent = value.question;

        // CREATE SPAN TO CONTAIN SCORE
        let score = document.createElement("span");
        score.className = "score";
        score.textContent = "score :" + value.score;

        // create btn to edit and delete
        let editer = document.createElement("span");
        editer.className = "editer";
        let i = document.createElement("i");
        i.className = "fa fa-edit edit";
        let deletes = document.createElement("i");
        deletes.className = "fa fa-trash delete";
        deletes.id = deleteId;
        deleteId += 1;
        deletes.addEventListener("click", removeQuestion)
        
        // APPEND CONTAIN TO LI AND APPEND LI TO UL
        editer.appendChild(i);
        editer.appendChild(deletes);
        li.appendChild(question);
        li.appendChild(score);
        li.appendChild(editer);
        let qusCompleted = document.querySelector("ul");
        qusCompleted.appendChild(li);

    }
}


// 2create div for container class name "container" ------append to body

let container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);
//create div for banner class name is "banner" append to container
let banner = document.createElement("div");
banner.className = "banner";
container.appendChild(banner);

// create span contain START YOUR QUIZ HERE append to banner 
let descipe = document.createElement("span");
descipe.textContent = "LET'S START YOUR QUIZ!";
banner.appendChild(descipe);


// create button for create question class name is ".btn-create-newQues"  append to banner
let btnCreateNew = document.createElement("button");
btnCreateNew.className = "btn-create-newQues";
btnCreateNew.textContent = "START CREATE QUIZ";
banner.appendChild(btnCreateNew);

// 3 create div for form class name "form" append to container 
let forms = document.createElement('div');
forms.className = 'form';
container.appendChild(forms);

// 4 create div for header form class name is "header-form" appen into form 
let header_form = document.createElement('div');
header_form.className = 'header-form';
forms.appendChild(header_form);

// 5 create h2 for quiz title class name is "title"
let title = document.createElement('h2');
title.className = 'title';
title.textContent = 'Quiz Title';
header_form.appendChild(title);

// 6 create input id name "title" appen to header form
let inputTitle = document.createElement('input');
inputTitle.type = 'text';
inputTitle.id = 'title';
inputTitle.placeholder = 'Title of your quiz...';
header_form.appendChild(inputTitle);

// 7 create body form class name is "body-form" appen to forms
let bodyForm = document.createElement('form');
bodyForm.id = 'body-form';
forms.appendChild(bodyForm);

// 8 create label question -title ------------------- append into bodyFrom
let questLabel= document.createElement('label');
questLabel.textContent = 'Question';
bodyForm.appendChild(questLabel);
// 9 create input question id name is "question-input" append into bodyForm 
let inputQuestion = document.createElement('input');
inputQuestion.type = 'text';
inputQuestion.name = 'question';
inputQuestion.id = 'question-input';
inputQuestion.placeholder = 'Question';
bodyForm.appendChild(inputQuestion);
// 10 create div for containing possible answers class name is "choose-answer" append bodform 
let answers = document.createElement('div');
answers.className = 'choose-answer';
bodyForm.appendChild(answers);
// 11 create Label answer class name is "label-answer" append answers
let answerLabel = document.createElement('label');
answerLabel.textContent = 'Answer:';
answerLabel.className = "label-answer";
answers.appendChild(answerLabel);
// 12 create span to define to input score 
let asignScore= document.createElement("span");
answerLabel.appendChild(asignScore);
let labelScore = document.createElement("span");
labelScore.textContent = "Asign score :";
// 13 create input for assign score id name is "score" 
let inputScore = document.createElement("input");
inputScore.setAttribute("id","score");
inputScore.setAttribute("value","0");
inputScore.setAttribute("type","number");
asignScore.appendChild(labelScore);
asignScore.appendChild(inputScore);
// 14 create input for assign answer class name is "choice" append to answers
for (let i=0; i<4; i++) {
    let choice = document.createElement('label');
    choice.className = 'choice';
    answers.appendChild(choice);
    // 15 create radio , check answer -
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answer';
    radio.className = "answer";
    choice.appendChild(radio);
    
    let inputAnswer = document.createElement('input');
    inputAnswer.type = 'text';
    inputAnswer.name = 'inputAnswer';
    inputAnswer.placeholder = 'Answer' + (i+1);
    choice.appendChild(inputAnswer);
    
}    
let addQuestion = document.createElement('div');
addQuestion.className = 'footer-form';
bodyForm.appendChild(addQuestion);
// create button for adding question
let btnAddQuest = document.createElement('button');
btnAddQuest.id = 'add';
btnAddQuest.textContent = 'Add question';
addQuestion.appendChild(btnAddQuest);
let btn = document.querySelector('#add');
// add eventlistener to btn create question
btn.addEventListener("click", ShowQuestions);



// create div to contain all question
let containQuest = document.createElement('div');
containQuest.className = 'contain-quest';
container.appendChild(containQuest);

let allQuestion = document.createElement('h3');
allQuestion.textContent = 'All Questions';
containQuest.appendChild(allQuestion);

let Completed =document.createElement("ul");
containQuest.appendChild(Completed);


//--Display quiz--
// hide other element and create global variables
var questionNumber = 0;
let totalScore = 0;
let scores = 0
let userChose = [];
let scoreOfEachQuest = [];
function hideOther() {
    userChose = [];
    scoreOfEachQuest = [];
    if (datas.length > 0) {
        forms.style.display = "none";
        header.style.display = "none";
        containQuest.style.display = "none";
        allQuestion.style.display = "none";
        computeScore.style.display = "none";
        disGBanswer.style.display = 'none';
        questionNumber = 0
        disAnswerID = 0;
        totalScore = 0;
        scores = 0;
        displayQuiz(datas[0])
    } else {
        window.alert("No quiz for now!")
    }
}

// display one question at a time
var disAnswerID = 0;
function oneQuesToDisplay() {
    // increase number of question to display
    questionNumber += 1
}

// display quiz 
let isAnswerChose = false
function displayQuiz(object) {
    computeScore.style.display = "none";
    disGBanswer.style.display = 'none';
    isAnswerChose = false
    var toQuizContainer = document.createElement("section");
    toQuizContainer.className = "display-quiz";
    container.appendChild(toQuizContainer);

    // top side of display quiz
    // title block
    let quizTitle = document.createElement("div");
    quizTitle.className = "dis-quiz-title";
    toQuizContainer.appendChild(quizTitle);
    let title = document.createElement("span")
    title.textContent = document.getElementById("title").value;
    quizTitle.appendChild(title)
    // question and answer block
    let questionAnswerSide = document.createElement("div");
    questionAnswerSide.className = "question-answer-block";
    toQuizContainer.appendChild(questionAnswerSide);

    let questBlock = document.createElement("div");
    questBlock.className = "show-question";
    questionAnswerSide.appendChild(questBlock)
    let disQuestion = document.createElement("span");
    disQuestion.textContent = object.question;
    disQuestion.id = "dis-question";
    questBlock.appendChild(disQuestion);

    //bottom side / answers side
    let answerSide = document.createElement("div");
    answerSide.className = "bottom-side";
    questionAnswerSide.appendChild(answerSide);
    for (let answer of object.answers) {
        let disAnswerContain = document.createElement("p");
        disAnswerContain.className = "anAnswer";
        disAnswerContain.id = disAnswerID;
        disAnswerContain.textContent = answer;
        disAnswerContain.addEventListener("click", choseAns);
        answerSide.appendChild(disAnswerContain);
        disAnswerID += 1
     }

    //button side
    //btn next
    let quizBtnContainer = document.createElement("div");
    quizBtnContainer.className = "quiz-btn-container";
    toQuizContainer.appendChild(quizBtnContainer)
    let quizButtonNext = document.createElement("button");
    quizButtonNext.className = "quiz-btn-next";
    quizButtonNext.textContent = "NEXT";
    quizButtonNext.addEventListener("click", nextQuestion)
    quizBtnContainer.appendChild(quizButtonNext);
}


//-- choose answer style / style outline when user choose--
let selectedAnswer = 0
function choseAns(event) {
    isAnswerChose = true
    let getAllAnswers = document.getElementsByClassName("anAnswer")
    let changeTarget = event.target;
    let getAnswerId = changeTarget.id;
    selectedAnswer = getAnswerId
    for (let item of getAllAnswers) {
        item.style.border = "none";
        if (item.id == getAnswerId) {
            item.style.border = "solid 2px #ffff"
        }
    }
}

// next question
function nextQuestion() {
    userChose.push(selectedAnswer);
    if (isAnswerChose) {
        countScore()
        disAnswerID = 0;
        oneQuesToDisplay()
        let previousQuestion = document.getElementsByClassName("display-quiz");
        for (let item of previousQuestion) {
            item.style.display = "none"
        }
        let previousBtn = document.getElementsByClassName("quiz-btn-container")
        for (let item of previousBtn) {
            item.style.display = "none"
        }
        if (questionNumber < datas.length) {
            displayQuiz(datas[questionNumber])
        }
    } else {
        window.alert("Please choose the answer!")
    }
    if (questionNumber === datas.length) {
        displayScore();
    }
}

// count score 
function countScore() {
    scores += parseInt(datas[questionNumber].score);
    if (selectedAnswer == datas[questionNumber].correct) {
        totalScore += parseInt(datas[questionNumber].score);
        scoreOfEachQuest.push(parseInt(datas[questionNumber].score));
    }else {
        scoreOfEachQuest.push(0);
    }
}

//--Remove a question--
function removeQuestion(event) {
    // get target and button id
    let getTarget = event.target;
    let btnId = getTarget.id;
    datas.splice(btnId, 1);
    displayQuest();
}

// CREATE DIV TO CLASS display-score TO CONTAIN SCORE AND APPEND IT TO CONTAINER
let disScore = document.createElement('div');
disScore.className = 'display-score';
container.appendChild(disScore);

//CREATE 2 SPAN AND APPEND TO DIV
let span1 = document.createElement('span');
span1.className = 'text-score';
span1.textContent = 'your score';
disScore.appendChild(span1);

let span2 = document.createElement('span');
span2.className = 'your-scores';
span2.textContent = totalScore + ' / ' + scores;
disScore.appendChild(span2);

let computeScore = document.querySelector('.display-score');
computeScore.style.display = 'none';

function displayScore() {
    span2.textContent = totalScore + ' / ' + scores;
    header.style.display = "flex";
    computeScore.style.display = 'flex';
    displayCorrection()

}

// DISPLAY GOOD/BAD ANSWER
// CREATE DIV TO CONTAIN ALL CORRECTION AND APPEND IT TO CONTAINER
let containCorrection = document.createElement('div');
containCorrection.className = 'contain-correction';
container.appendChild(containCorrection);

let correction = document.createElement('div');
correction.className = 'correction';
containCorrection.appendChild(correction);

let disGBanswer = document.querySelector('.contain-correction');
disGBanswer.style.display = 'none';

// CREATE FUNCTION TO DISPLAY ALL CORRECTION
function displayCorrection() {
    disGBanswer.style.display = 'block';
    disGBanswer.removeChild(disGBanswer.firstElementChild);
    document.body.style.backgroundImage = "url(../images/bg.png)";

    // CREATE DIV CLASSNAME correction TO CONTAIN ANY CORRECTION
    let correction = document.createElement('div');
    correction.className = 'correction';
    containCorrection.appendChild(correction);

    // LOOP ON DATAS TO CREATE AND GET VALUE TO DISPLAY CORRECTION
    for (let index in datas) {
        let element = datas[index];
        let anyCorrection = document.createElement('div');
        anyCorrection.className = 'result';
        correction.appendChild(anyCorrection);
    
        let cQuest = document.createElement('div');
        cQuest.className = 'c-quest';
        anyCorrection.appendChild(cQuest);
        
        let quest = document.createElement('span');
        quest.className = 'quest';
        quest.textContent = element.question;
        cQuest.appendChild(quest);
    
        let scoreOfanyQuest = document.createElement('span');
        scoreOfanyQuest.className = 'score-quest';
        scoreOfanyQuest.textContent = scoreOfEachQuest[index] + ' / ' + element.score;
        cQuest.appendChild(scoreOfanyQuest);
    
        let containAllAnswers = document.createElement('ul');
        containAllAnswers.className = 'contain-answer';
        anyCorrection.appendChild(containAllAnswers);

        for (let value in element.answers) {
            let anyAnsewers = document.createElement('li');
            anyAnsewers.className = 'correction-answer';
            containAllAnswers.appendChild(anyAnsewers);
        
            let iconCheck = document.createElement("span");
            iconCheck.className = "check";
            let radioIcon = document.createElement("i");
            let classIcon = 'fa fa-circle-o';
            iconCheck.appendChild(radioIcon);
            anyAnsewers.appendChild(iconCheck);
            
            let anyAnser = document.createElement('span');
            anyAnser.className = 'text-answer';
            anyAnser.textContent = element.answers[value];
            anyAnsewers.appendChild(anyAnser);
            
            if (value == userChose[index]) {
                classIcon = 'fa fa-dot-circle-o';
                radioIcon.style.color = 'red';
                anyAnser.style.color = 'red';
            }
            if (value == element.correct){
                classIcon = 'fa fa-dot-circle-o';
                radioIcon.style.color = 'green';
                anyAnser.style.color = 'green';
            }
            radioIcon.className = classIcon;
        }
    
    
    }

}


// menu ------------------------------
function display(){
    let banners = document.querySelector(".banner");
    banners.style.display= "none";
    createBtn.style.background = "#00ADE3";
    createBtn.style.color = "#ffff";
    console.log(container);
    forms.style.display ="block";
    containQuest.style.display = 'block';
    computeScore.style.display = 'none';
    disGBanswer.style.display = 'none';
    allQuestion.style.display = 'block';


}    
let datas =[];
let banners = document.querySelector(".banner");
forms.style.display ="none";
containQuest.style.display ="none";

console.log("Hello the best Group 16");
let createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click",display);

let btnCreateQuest = document.querySelector('.btn-create-newQues');
btnCreateQuest.addEventListener('click', display);

let getQuestion = document.querySelector("#question-input");
let getScore = document.querySelector("#score");

let getAnswer = document.querySelectorAll(".answer");
let btnAdd = document.querySelector("#add");
let topic = document.querySelector('#title');



