// function dispay(array){

//     form.style.dispay ="none";
//     console.log(form);

// }

// let form = document.querySelector(".form");
// console.log("Hello the best Group 16");
// const createBtn = document.querySelector(".create-btn");
// console.log(createBtn);
// createBtn.addEventListener("click",dispay);
var getQuestion = document.querySelector("#question-input");
var getScore = document.querySelector("#score");

var getAnswer = document.querySelectorAll(".answer");
var btnAdd = document.querySelector("#add");
var ul = document.querySelector("ul");


let showAnswer = (event) => {
    event.preventDefault();


    for (let answer of getAnswer) {
        if (answer.checked) {
            console.log(answer.nextElementSibling.value);
        }
    };
    let li = document.createElement("li");
    let question = document.createElement("span");
    question.className = "contant-qus";
    question.textContent = getQuestion.value;

    let score = document.createElement("span");
    score.className = "score";
    score.textContent = "score :" + getScore.value;
    let editer = document.createElement("span");
    editer.className = "editer";
    let i = document.createElement("i");
    i.className = "fa fa-edit";
    let deletes = document.createElement("i");
    deletes.className = "fa fa-trash";


    editer.appendChild(i);
    editer.appendChild(deletes);
    li.appendChild(question);
    li.appendChild(score);
    li.appendChild(editer);
    ul.appendChild(li);


}
btnAdd.addEventListener("click", showAnswer);