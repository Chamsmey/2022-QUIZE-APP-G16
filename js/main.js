
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
btnCreateQuiz.textContent = 'Create Question';
menu.appendChild(btnCreateQuiz);

//CREATE DIV CLASS quiz-btn
let btnQuiz = document.createElement('div');
btnQuiz.className = 'quiz-btn';
btnQuiz.textContent = 'Quiz'
menu.appendChild(btnQuiz);

