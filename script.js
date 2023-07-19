const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const bCopiar = document.querySelector(".copiar")
const mensajeTextarea = document.querySelector(".mensaje-con-imagen")
mensaje.setAttribute('readonly', 'true')

function desaparecer() {
    document.getElementById("preEncripte").style.display = "none";
    }
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= ""
    mensaje.style.backgroundImage = "none";
    mensajeTextarea.style.display = "none"
    bCopiar.style.display = "block";
} 
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value= ""
    mensaje.style.backgroundImage = "none";
    bCopiar.style.display = "block";
    mensajeTextarea.style.display = "none"
}  
function copiar(){
    navigator.clipboard.writeText(mensaje.value);
}
function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado= stringEncriptado.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado= stringDesencriptado.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}
