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
    document.getElementById("btnCopiar").style.display = "inline-block";
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

     

  
  document.querySelector("#copy").addEventListener("click", copy);
  
  function copiar() {
    // Aquí puedes agregar la lógica para obtener el texto que deseas copiar
    const textoACopiar = texto;
  
    // Llamar a la función updateClipboard para copiar el texto al portapapeles
    updateClipboard(textoACopiar);


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