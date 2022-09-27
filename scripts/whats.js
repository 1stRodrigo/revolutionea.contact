//VALIDAÇÕES DO FORMULÁRIO

const fields = document.querySelectorAll("[required]")

function customValidation(event){
    const field = event.target

    // lógica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (error != "customError" && field.validity[error]) {
                foundError = true
            }

        }
        return foundError;
    }

    const error = verifyErrors()
    console.log("Error exists: ", error)

    if (error) {
        //trocar mensagem de required
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("") 
    }
}


for ( field of fields) {
    field.addEventListener("invalid", customValidation)
}

//ENVIAR FORMULÁRIO
    document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("enviar o formulário")
        sendMessage()
        
        /*
        document.querySelector('#submit').addEventListener('click', sendMessage()),
        document.querySelector('#submit').addEventListener('touchstart', sendMessage());*/


        // não vai enviar o formulário
        // event.preventDefault()
    } )




function sendMessage() {
    let cliente = document.querySelector('#nomefull').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereço').value;
    var services = document.querySelector('#services_select');
    //var opcoes = [...services.selectedOptions].map(Option => Option.text);
    const textOpcoes = Array.from(services.selectedOptions).map(e => e.text);

    const breakLineOpcoes =  textOpcoes
    
    console.log("Executando função sendMessage")
    
    let url = "https://api.whatsapp.com/send?phone=5519987164384&text=_Olá, seja bem vindo a *Revolution EA*_ %0A%0ANós agradecemos seu contato *" + cliente + "*! %0A%0ARelizar um bom serviço à você é a nossa prioridade. Iremos te retornar o quanto antes!%0A---------------------------------------%0A Confira os dados abaixo: %0A---------------------------------------%0A%0A*Telefone:* %0A" + telefone + "%0A%0A*Endereço:*%0A" + endereco + " %0A%0A*Serviços:*%0A" + breakLineOpcoes + ". %0A";

   
   window.open(url);
};
