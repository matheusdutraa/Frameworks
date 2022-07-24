/*
b) O personagem escolhido deve responder com frases aos eventos de
i. mouseenter
ii. mouseleave
iii. mousemove
iv. click
*/ 

// onclick="clicou()" onmouseenter="entrou()" onmouseleave="saiu()" onmousemove="moveu()"

const personagem = document.querySelector('#personagem');

function clicou() {
    const h1 = document.getElementById("agaum");
        h1.style.color = "red";
        h1.style.fontSize = "40px";
        h1.innerHTML = "OLHA A MÃO!!!!";
}

function entrou() {
    const h1 = document.getElementById("agaum");
        h1.style.color = "blue";
        h1.style.fontSize = "40px";
        h1.innerHTML = "SAI DE PERTO!!!!";
}

function saiu() {
    const h1 = document.getElementById("agaum");
        h1.style.color = "black";
        h1.style.fontSize = "40px";
        h1.innerHTML = "VAZOU!!!!";
}

function moveu() {
    const h1 = document.getElementById("agaum");
        h1.style.color = "green";
        h1.style.fontSize = "40px";
        h1.innerHTML = "VIROU AVIAOZINHO!!!!";
}

// por algum motivo o mouseenter não funciona, acho que ele da intererencia com o mousemove