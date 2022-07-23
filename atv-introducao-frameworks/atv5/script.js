function verifica(){
    const palavra = document.getElementById('texto');
    const h1 = document.getElementById("agaum");
    const salvapalavra = palavra.value;
    const numletras = palavra.value.length;
    if(numletras >= "3"){
        if(salvapalavra === "chocolate"){
            h1.innerHTML = "Eu amo sorvete de chocolate!!!!";
        }


    }

}