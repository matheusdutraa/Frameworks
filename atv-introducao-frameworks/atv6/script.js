function verifica(){
    const palavra = document.getElementById('texto');
    const h1 = document.getElementById("agaum");
    const chocolate = palavra.value;
    const baunilha = palavra.value;
    const numletras = palavra.value.length;
    if(numletras >= "3"){
        if(chocolate === "chocolate"){
            h1.innerHTML = "Eu amo sorvete de chocolate!!!!";
        }
        else if(baunilha === "baunilha"){
            h1.innerHTML = "Ahhh, mas eu prefiro chocolate!!!!";
        }
        else{
            h1.innerHTML = "Eu queria um sabor de sorvete!!!!";
        }

    }

}

const cont = 0;

function darkmode(){

    
    if(cont == 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        cont++;
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        cont--;
    }
    
}

// Não consegui fazer ele voltar para o modo claro :( 

/*
const cont = 0;

function theme(){
    if(cont == 0){
        darkmode();
    }
    else{
        lightmode();
    }

    function darkmode(){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        cont++;
    }

    function lightmode(){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        cont--;
    }
}


*/