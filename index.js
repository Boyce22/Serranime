const form = document.querySelector("#form");
const campos =  document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");

const regex =/^\S+@\S+\.\S+$/;
const email = 'otaku@gmail.com';
const senha = 'otaku123';




function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    
    
}
function emailValidate(){
    if(!regex.test(campos[0].value)){
        setError(0)
    }else{
        removeError(0);
    }
}



function loginValidate(){
    if(campos[0].value == email && campos[1].value == senha){
        console.log("validado");
    }else{
        alert("Email ou senha errado.")
    }
}