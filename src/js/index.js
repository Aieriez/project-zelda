
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFechar = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;
var deadline = new Date("May 12, 2023").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = "Faltam <br>" + days + " Dias <br>" 
+ hours +":" + addZero(minutes) + ":" + addZero(seconds);
    if (t < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Disponivel";
    }
}, 1000);

function addZero(num){
    if (num <= 9) 
        return "0" + num;
    else
        return num; 
}

function alternarModal()
{
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
});

botaoFechar.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

