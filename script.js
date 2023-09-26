function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var spr = document.querySelector('.check-js');
var msg = document.querySelector('.msg-js');
var input = document.querySelector('#input');
var losowaWartosc = 0;
var start = document.querySelector('.start-js');
start.onclick = function(){
    losowaWartosc = getRandomInt(100) + 1;
    start.disabled = true
    spr.disabled = false;
}

spr.onclick = function(){
    if(input.value == losowaWartosc){
        msg.innerHTML = "Wygrana";
        start.disabled = true
        spr.disabled = true; 
    }else{
        if(input.value < losowaWartosc){
            msg.innerHTML = "Liczba jest mniejsza!"
        }else{
            msg.innerHTML = "Liczba jest większa!"
        }
    }
  


}