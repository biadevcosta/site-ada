
document.getElementById("botaoenviar").addEventListener("click",validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
    alert("Pronto! Agora você receberá todas as novidades por Email.")
  }else{
    alert("Preencha os campos nome e email!")
  }
}

