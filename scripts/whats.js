
document.querySelector('#submit').addEventListener('touchstart', function() {
    let cliente = document.querySelector('#nomefull').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereço').value;
    let services = document.querySelector('#services_select').value;
    //var opcoes = [...services.selectedOptions].map(Option => Option.text);
    const valueOpcoes = Array.from(services.selectedOptions).map(e => e.text);

    /*const breakLineOpcoes = [
        valueOpcoes[0] += ' %0A%0A ',
        valueOpcoes[1] += ' %0A%0A ',
        valueOpcoes[2] += ' %0A%0A ', 
    ]*/
    const breakLineOpcoes = valueOpcoes
    document.getElementById('seção').innerHTML = breakLineOpcoes;
    
   /*let url = "https://api.whatsapp.com/send?phone=5519987164384&text=Bem vindo a Revolution -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu telefone ?%0A" + 
   telefone + "%0A Qual o seu endereço %0A "+ endereco +" %0A Quais serviços você precisa? %0A "+ opcoes +""; */
   let url = "https://api.whatsapp.com/send?phone=5519987164384&text=_Olá, seja bem vindo a *Revolution EA*_ %0A%0ANós agradecemos seu contato *" + cliente + "*! %0A%0ARelizar um bom serviço à você é a nossa prioridade. Iremos te retornar o quanto antes!%0A---------------------------------------%0A Confira os dados abaixo: %0A---------------------------------------%0A%0A*Telefone:* %0A" + telefone + "%0A%0A*Endereço:*%0A" + endereco + " %0A%0A*Serviços:*%0A" + breakLineOpcoes + ". %0A";

   window.open(url);
});


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








    document.querySelector("form")
    .addEventListener("submit", event => {
        console.log("enviar o formulário")


        sendMessage();
        // não vai enviar o formulário
        //event.preventDefault()
    } )

document.querySelector('#submit').addEventListener('click', sendMessage());

function sendMessage() {
    let cliente = document.querySelector('#nomefull').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereço').value;
    var services = document.querySelector('#services_select');
    //var opcoes = [...services.selectedOptions].map(Option => Option.text);
    const textOpcoes = Array.from(services.selectedOptions).map(e => e.text);

    const breakLineOpcoes =  textOpcoes

    /*if
        let url = "https://api.whatsapp.com/send?phone=5519987164384&text=_Olá, seja bem vindo a *Revolution EA*_ %0A%0ANós agradecemos seu contato *" + cliente + "*! %0A%0ARelizar um bom serviço à você é a nossa prioridade. Iremos te retornar o quanto antes!%0A---------------------------------------%0A Confira os dados abaixo: %0A---------------------------------------%0A%0A*Telefone:* %0A" + telefone + "%0A%0A*Endereço:*%0A" + endereco + " %0A%0A*Serviços:*%0A" + breakLineOpcoes + ". %0A";
    }*/

    
    //document.getElementById('seção').innerHTML = breakLineOpcoes;
    
    let url = "https://api.whatsapp.com/send?phone=5519987164384&text=_Olá, seja bem vindo a *Revolution EA*_ %0A%0ANós agradecemos seu contato *" + cliente + "*! %0A%0ARelizar um bom serviço à você é a nossa prioridade. Iremos te retornar o quanto antes!%0A---------------------------------------%0A Confira os dados abaixo: %0A---------------------------------------%0A%0A*Telefone:* %0A" + telefone + "%0A%0A*Endereço:*%0A" + endereco + " %0A%0A*Serviços:*%0A" + breakLineOpcoes + ". %0A";

   
   window.open(url);
};
