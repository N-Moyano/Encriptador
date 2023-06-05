function encript() {
    var mensajeAencriptar = document.getElementById("decodificador").value;
    
    (mensajeAencriptar = mensajeAencriptar.replace(/e/g, 'enter'));
              
    (mensajeAencriptar = mensajeAencriptar.replace(/i/g, 'imes'));

    (mensajeAencriptar = mensajeAencriptar.replace(/a/g, 'ai'));

    (mensajeAencriptar = mensajeAencriptar.replace(/o/g, 'ober'));

    (mensajeEncriptado = mensajeAencriptar.replace(/u/g, 'ufat'));
    
    document.getElementById("texto").innerHTML = mensajeEncriptado;
    document.getElementById("esconder").style.display = "none";
    document.getElementById("esconder2").style.display = "none";
    document.getElementById("btn-copy").style.display = "inline-block";
    console.log(mensajeEncriptado);            }
    

function desencript() {
var mensajeAdesencriptar = document.getElementById("decodificador").value;

(mensajeAdesencriptar = mensajeAdesencriptar.replace(/enter/g, 'e'));
          
(mensajeAdesencriptar = mensajeAdesencriptar.replace(/imes/g, 'i'));

(mensajeAdesencriptar = mensajeAdesencriptar.replace(/ai/g, 'a'));

(mensajeAdesencriptar = mensajeAdesencriptar.replace(/ober/g, 'o'));

(mensajeDesencriptado = mensajeAdesencriptar.replace(/ufat/g, 'u'));
           
document.getElementById("texto").innerHTML = mensajeDesencriptado;
document.getElementById("esconder").style.display = "none";
document.getElementById("esconder2").style.display = "none";

}

const elemento = document.querySelector('.contenido-texto');

document.querySelector('#btn-copy').addEventListener('click',()=>{

    document.querySelector('.mensaje-copy').classList.add('show');
    copyToClipBoard(elemento);

    setTimeout(()=>{
        document.querySelector('.mensaje-copy').classList.remove('show');
    },1300);
})     

  

function copyToClipBoard(elemento){
    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', elemento.innerText);

    document.body.appendChild(inputOculto);

    inputOculto.select();

    document.execCommand('copy');

    document.body.removeChild(inputOculto);


}


//const elemento = document.querySelector('.texto');

//document.querySelector('#btnCopiar').addEventListener('click',()=>{
//    copiarAlPortapapeles(elemento); 
//})

//function copiarAlPortapapeles(elemento){
//    const entradaOculta =document.createElement('input');

//    entradaOculta.setAttribute('value' , elemento.innerText);
//    document.body.appendChild(entradaOculta);
    
//    console.log(entradaOculta);
//}