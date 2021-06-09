//DESAFIO COMPLEMENTARIO
function numeroEsPar(){
    let ingreseNumero=parseInt(prompt("Hola, Ingrese un número para saber si es par"));
    let par= ingreseNumero % 2===0;

if(par){
    mostrarOk();
} else{
    mostrarError();
}

}

function mostrarOk(){
    alert("Es par");
}
function mostrarError(){
    alert(" No es par ")
}

numeroEsPar()