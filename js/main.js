

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
        console.log(datas);

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
    containQuest.removeChild(containQuest.lastElementChild);
    let  ul = document.createElement('ul');
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
descipe.textContent = "START YOUR QUIZ HERE";
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
// hide other element
var questionNumber = 0;
var disAnswerID = 0;
let totalScore = 0;
function hideOther() {
    if (datas.length > 0) {
        forms.style.display = "none";
        header.style.display = "none";
        containQuest.style.display = "none";
        allQuestion.style.display = "none";
        questionNumber = 0
        disAnswerID = 0;
        totalScore = 0;
        displayQuiz(datas[0])
    } else {
        window.alert("No quiz to play!")
    }
}

// display quiz 
let isAnswerChose = false
function displayQuiz(object) {
    isAnswerChose = false
    var toQuizContainer = document.createElement("section");
    toQuizContainer.className = "display-quiz";
    container.appendChild(toQuizContainer);

    // top side
    // title block
    let quizTitle = document.createElement("div");
    quizTitle.className = "dis-quiz-title";
    toQuizContainer.appendChild(quizTitle);
    let title = document.createElement("span")
    title.textContent = document.getElementById("title").value;
    quizTitle.appendChild(title)
    // question block
    let questionSide = document.createElement("div");
    questionSide.className = "question-block";
    toQuizContainer.appendChild(questionSide);
    let disQuestion = document.createElement("span");
    disQuestion.textContent = object.question;
    disQuestion.id = "dis-question";
    questionSide.appendChild(disQuestion);

    //bottom side / answers side
    let answerSide = document.createElement("div");
    answerSide.className = "bottom-side";
    toQuizContainer.appendChild(answerSide);
    for (let answer of object.answers) {
        let disAnswerContain = document.createElement("p");
        disAnswerContain.className = "answers";
        disAnswerContain.id = disAnswerID
        disAnswerContain.textContent = answer;
        disAnswerContain.addEventListener("click", choseAns)
        answerSide.appendChild(disAnswerContain)
        disAnswerID += 1
     }

    //button side
    //btn next
    let quizBtnContainer = document.createElement("div");
    quizBtnContainer.className = "quiz-btn-container";
    container.appendChild(quizBtnContainer)
    let quizButtonNext = document.createElement("button");
    quizButtonNext.className = "quiz-btn-next";
    quizButtonNext.textContent = "NEXT";
    quizButtonNext.addEventListener("click", nextQuestion)
    quizBtnContainer.appendChild(quizButtonNext);
}


//-- choose answer style--
let selectedAnswer = 0
function choseAns(event) {
    isAnswerChose = true
    let getAllAnswers = document.getElementsByClassName("answers")
    let changeTarget = event.target;
    let getAnswerId = changeTarget.id;
    selectedAnswer = getAnswerId
    for (let item of getAllAnswers) {
        item.style.border = "none";
        if (item.id == getAnswerId) {
            item.style.border = "solid 2px orange"
        }
    }
}

// next question
function nextQuestion() {
    if (isAnswerChose) {
        if (selectedAnswer == datas[questionNumber].correct) {
            totalScore += parseInt(datas[questionNumber].score);
        }
        console.log(totalScore);
        disAnswerID = 0;
        questionNumber += 1
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
}



// menu ------------------------------
function display(){
    let banners = document.querySelector(".banner");
    banners.style.display= "none";
    createBtn.style.background = "#FF9900";
    createBtn.style.color = "#ffff";
    console.log(container);
    forms.style.display ="block";
    containQuest.style.display = 'block'

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



