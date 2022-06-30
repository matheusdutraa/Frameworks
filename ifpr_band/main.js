function tocaSom(){

    var idSom = '#som_tecla_pom'

    document.querySelector(idSom).play;
}

const teclas = document.querySelectorAll(".tecla");


var contador = 0;

while(contador < 9){
    teclas(contador).onclick = function(){
        tocaSom('som_tecla_pom')
    }

    contador++
}