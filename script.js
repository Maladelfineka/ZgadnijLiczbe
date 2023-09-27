function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var tabPl = ['Zgadnij liczbę od 1 do 100',
    'Aby zacząć kliknij start',
    'Sprawdż',
    'Wygrana',
    'Mniejsza',
    'Większa'];

var tabEn = ['Guess a number from 1 to 100',
    'To start, click start',
    "True",
    "Win",
    "Smaller",
    "Bigger"];

var h3 = document.querySelector('.h3-js');
var h1 = document.querySelector('.h1-js');
    

var lang = "pl";



var spr = document.querySelector('.check-js');
var msg = document.querySelector('.msg-js');
var input = document.querySelector('#input');
var losowaWartosc = 0;
var langButton = document.querySelector('.lang');
var start = document.querySelector('.start-js');
start.onclick = function () {
    losowaWartosc = getRandomInt(100) + 1;
    start.disabled = true
    spr.disabled = false;
}
langButton.onclick = function(){
    if (lang == 'pl') {
        h1.innerHTML = tabPl[0];
        h3.innerHTML = tabPl[1];
        spr.innerHTML = tabPl[2];
        langButton.innerHTML ='<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg" alt="Flaga" height="30" width="50">'
        lang = 'en'
    
    }else{
        h1.innerHTML = tabEn[0];
        h3.innerHTML = tabEn[1];
        spr.innerHTML = tabEn[2];
        langButton.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_(3-5).svg" alt="Flaga" height="30">'
        lang = 'pl'
    }
}

if (lang == 'pl') {
    h1.innerHTML = tabPl[0];
    h3.innerHTML = tabPl[1];
    spr.innerHTML = tabPl[2];
    

}else{
    h1.innerHTML = tabEn[0];
    h3.innerHTML = tabEn[1];
    spr.innerHTML = tabEn[2];
    
}
spr.onclick = function () {
    if (input.value == losowaWartosc) {
        if (lang == 'pl') {
            msg.innerHTML = tabPl[3];;
        } else {
            msg.innerHTML = tabEn[3];;
        }

        start.disabled = true
        spr.disabled = true;
    } else {
        if (input.value < losowaWartosc) {
            if (lang == 'pl') {
                msg.innerHTML = tabPl[4];;
            } else {
                msg.innerHTML = tabEn[4];;
            }
        } else {
            if (lang == 'pl') {
                msg.innerHTML = tabPl[5];;
            } else {
                msg.innerHTML = tabEn[5];;
            }
        }
    }



}

