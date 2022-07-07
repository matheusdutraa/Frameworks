    const caixa = document.querySelector('div');

    caixa.addEventListener("click", (evento) => {
        console.log(evento.target.innerText = "B!")
    });

    caixa.addEventListener("mouseenter", (evento) => {
        console.log(evento.target.innerText = "C!")
    });

    // Teclado

    const texto = document.querySelector('input');

    const msg = document.querySelector('.msg');

    texto.addEventListener("keyup", (evento) => {
        const textoDigitado = evento.target.value;

        if(textoDigitado === "macarrão"){
            msg.innerText = "Cavalo! Dança gatinho, dança!.";
        }
        else{
            msg.innerText = "Amendoim"
        }

        if(evento.key === "a"){
            console.log("Voce clicou no a");
        }
    });



