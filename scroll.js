let body = document.querySelector('body')
let parent = document.querySelector('.parent')
let parent1 = document.querySelector('.parent1')
let parent2 = document.querySelector('.parent2')
const durée = 5000;

function changer() {
    body.classList.add('classbody');
}

function changer1() {
    parent.classList.add('classbody')
}

function changer2() {
    parent1.classList.add('classbody')
}

function changer3() {
    parent2.classList.add('classbody')
}

function executeAfter() {
    body.classList.remove('classbody')    
}

setInterval(function(){
    body.classList.remove('classbody')
    parent.classList.remove('classbody')
    parent1.classList.remove('classbody')
    parent2.classList.remove('classbody')
}, 2000);




