const form = document.querySelector("#form");
const campos =  document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const corpoBody = document.querySelector("#body");
const btn = document.querySelector(".meubotao");

const regex =/^\S+@\S+\.\S+$/;
const email = 'otaku@gmail.com';
const senha = 'otaku123';




function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
    
}
function emailValidate(){
    if(!regex.test(campos[0].value || campos[0].value === email)){
        setError(0)
    }else{
        removeError(0);
    }
}

function senhaValidate(){
    if(!campos[1].value == senha){
        setError(1)
    }else{
        removeError(1)
    }
}


function loginValidate(){
    if(campos[0].value === email && campos[1].value === senha){
        window.location.href = '/TrabalhoFinal/index.html'
    }else{
        setError(0)
        setError(1)
        campos[0].textContent("Email ou Senha Incorreto.");
        campos[1].textContent("Email ou Senha Incorreto.");
    }
}