
let email= document.querySelector('#email')
let emailOk = false
let assuntoOk = false
let assunto= document.querySelector('#assunto')

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
          txtEmail.innerHTML='E-mail Invalido'
          txtEmail.style.color='red'
    }else{
         txtEmail.innerHTML ='E-mail Valido'
         txtEmail.style.color='green'
         emailOk =true
    }
}

function ValidaAssunto(){
    let txtAssunto= document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Limite de caracteres é 100!'
        txtAssunto.style.color= 'red'
        txtAssunto.style.display ='block'
    }else{
        txtAssunto.style.display ='none'
        assuntoOk = true
    }
}
