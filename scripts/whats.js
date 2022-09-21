
document.querySelector('#submit').addEventListener('touchstart', function() {
    let cliente = document.querySelector('#nomefull').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereço').value;
    let services = document.querySelector('#services_select').value;
    //var opcoes = [...services.selectedOptions].map(Option => Option.text);
    const valueOpcoes = Array.from(services.selectedOptions).map(e => e.text);

    const breakLineOpcoes = [
        valueOpcoes[0] += ' %0A%0A ',
        valueOpcoes[1] += ' %0A%0A ',
        valueOpcoes[2] += ' %0A%0A ', 
    ]
    document.getElementById('seção').innerHTML = breakLineOpcoes;
    
   /*let url = "https://api.whatsapp.com/send?phone=5519987164384&text=Bem vindo a Revolution -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu telefone ?%0A" + 
   telefone + "%0A Qual o seu endereço %0A "+ endereco +" %0A Quais serviços você precisa? %0A "+ opcoes +""; */
   let url = "https://api.whatsapp.com/send?phone=5519987164384&text=Bem vindo a Revolution -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu telefone ?%0A" + 
   telefone + "%0A Qual o seu endereço? %0A " + endereco + " %0A Quais serviços você precisa? %0A%0A %0A %0A " + breakLineOpcoes + " %0A ";
   
   window.open(url);
});

document.querySelector('#submit').addEventListener('click', function() {
    let cliente = document.querySelector('#nomefull').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereço').value;
    var services = document.querySelector('#services_select');
    //var opcoes = [...services.selectedOptions].map(Option => Option.text);
    const valueOpcoes = Array.from(services.selectedOptions).map(e => e.text);
    /*valueOpcoes[0].innerText += valueOpcoes[0] +  ` "%0A" `
    valueOpcoes[1].innerText += valueOpcoes[1] +  ` "%0A" `
    valueOpcoes[2].innerText += valueOpcoes[2] +  ` "%0A" ` */

    //TALVEZ SEJA POR ESSE CAMINHO 
    const breakLineOpcoes = [
        valueOpcoes[0] += ' %0A%0A ',
        valueOpcoes[1] += ' %0A%0A ',
        valueOpcoes[2] += ' %0A%0A ', 
    ]
    document.getElementById('seção').innerHTML = breakLineOpcoes;
    //console.log(valueOpcoes[0], valueOpcoes[1], valueOpcoes[2]);
    

    /*var valueOpcoes = Array.from(services.options).map(e => e.value);
    document.getElementById('seção').innerHTML = valueOpcoes;*/
    //var opcoes = [...services.selectedOptions].map(Option => Option.text);
    
   let url = "https://api.whatsapp.com/send?phone=5519987164384&text=Bem vindo a Revolution -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu telefone ?%0A" + 
   telefone + "%0A Qual o seu endereço? %0A " + endereco + " %0A Quais serviços você precisa? %0A%0A %0A %0A " + breakLineOpcoes + " %0A ";
   
   window.open(url);
});
