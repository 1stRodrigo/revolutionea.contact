
document.querySelector('#submit').addEventListener('touchstart', function() {
    let cliente = document.querySelector('#nomefull').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereço').value;
    let services = document.querySelector('#services_select').value;
    var opcoes = [...services.selectedOptions].map(Option => Option.text);
    
   let url = "https://api.whatsapp.com/send?phone=5519987164384&text=Bem vindo a Revolution -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu telefone ?%0A" + 
   telefone + "%0A Qual o seu endereço %0A "+ endereco +" %0A Quais serviços você precisa? %0A "+ opcoes +""; 
   
   window.open(url);
});

document.querySelector('#submit').addEventListener('click', function() {
    let cliente = document.querySelector('#nomefull').value;
    let telefone = document.querySelector('#telefone').value;
    let endereco = document.querySelector('#endereço').value;
    var services = document.querySelector('#services_select');
    var opcoes = [...services.selectedOptions].map(Option => Option.text);
    console.log(opcoes)
    
   let url = "https://api.whatsapp.com/send?phone=5519987164384&text=Bem vindo a Revolution -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu telefone ?%0A" + 
   telefone + "%0A Qual o seu endereço? %0A " + endereco + " %0A Quais serviços você precisa? %0A%0D%0D "+ opcoes +""; 
   
   window.open(url);
});
