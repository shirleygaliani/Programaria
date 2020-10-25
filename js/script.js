document.getElementById("Enviar").addEventListener("click", validaformulario)

function validaformulario(){

  if (document.getElementById("Nome").value != "" && 
  document.getElementById("Email").value != "" &&
     document.getElementById("telefone").value != "" )
  {
    alert("Prontinho! Agora você receberá as novidades por email <3")
  }
  else
  {
    alert("Por favor, preencha os campos nome, email e telefone :)")
  }

}