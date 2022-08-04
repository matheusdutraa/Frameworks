function makeAjaxCall() {
    let httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = () => {

        if (httpRequest.readyState === XMLHttpRequest.OPENED) {
            console.log("Carregando...")
        } else {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {         
                    let resposta = JSON.parse(httpRequest.responseText);

                    console.log(resposta[5].id)
                    console.log(resposta[5].firstname)
                    console.log(resposta[5].lastname)

                } else {
                    console.log("There was a problem with the request.");
                }
            }
        }

    }
    httpRequest.open('GET', 'http://192.100.60.77/PersonProject/public/index.php/person');
    httpRequest.send();
}
