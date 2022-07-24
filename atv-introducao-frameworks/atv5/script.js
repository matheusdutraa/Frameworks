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