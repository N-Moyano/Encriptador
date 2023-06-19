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
}
    

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

  

  

const btnCopiar = str => {
    // PASO 1
    const el = document.createElement("textarea");
    // PASO 2
    el.value = aCopiar.value;
    el.setAttribute("readonly", "");
    // PASO 3
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    // PASO 4
    el.select();
    // PASO 5
    document.execCommand("copy");
    // PASO 6
    document.body.removeChild(el);
  };