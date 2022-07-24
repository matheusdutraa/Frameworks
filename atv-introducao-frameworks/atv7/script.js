function verifica(){
	const password = document.getElementById("senha");
	const confirmPassowrd = document.getElementById("confirmacaosenha");
	const name = document.getElementById("nome");
	const email = document.getElementById("email");
	
	if(name.value, email.value, password.value === ""){
		alert("Preencha todos campos!");
	}
	else if(password.value === confirmPassowrd.value){
		alert('Cadastro realizado com sucesso!')
	}else{
		alert('Senhas não conferem');
	}
}
// Não consegui fazer algo a respeito se a pessoa deixar a senha vazia :(
// Segue abaixo minhas frutacoes com codigos que nao sei porque nao funcionaram 

/*
const senha = document.querySelector("#senha");
const confirmaSenha = document.querySelector("#confirmacaosenha");

function verificaSenha(){
	if(senha != confirmaSenha){
		alert('Senhas não conferem');
	}
}

const senha = getElementById('senha');
const confirmaSenha = getElementById('confirmaSenha');

function verificaSenha(){
	if(senha.value != confirmaSenha.innerText){
		alert('Senhas não conferem');
	}
}

const senha = document.querySelector("#senha");
const confirmaSenha = document.querySelector("#confirmaSenha");

function verificaSenha(){
	if(senha != confirmaSenha){
		alert('Senhas não conferem');
	}
}


confirmaSenha.addEventListener('click', () => {
	if(senha.value != confirmaSenha.value){
		alert("Senhas não conferem");
	}
	else{
		alert("Senhas conferem");
	}
})
*/




