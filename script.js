// Script por Rafaela Oliveira Marques

// Recuperando Usuário e Senha do HTML
var inputUsuario = document.getElementById('usuario')
var inputSenha = document.getElementById('senha')

// Manipulaçao Modal
var myModalButton = document.getElementById('myModalButton')
var myModalText = document.getElementById('myModalText')


function autenticar(event){
  // Interromper o evento de Submit
  event.preventDefault()

  // Consistência
  if(inputUsuario.value == 'admin' && inputSenha.value == '1234'){
    myModalText.innerText = 'Usuário Logado!'
  } else {
  myModalText.innerText = 'Usuário ou Senha Inválido'
  }

myModalButton.click()
}