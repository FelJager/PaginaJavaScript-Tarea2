// //Creamos un Juego de números al azar donde debemos elegir 
// //Coloca los números al azar

let num = Math.ceil(Math.random()*10)

//Manejador de eventos
document.getElementById("boton").addEventListener("click", function(){
    //Obtener informacion
    let dato = document.getElementById("numero")
    //Mostrar la respuesta de acuerdo a la condicion
    if(num == dato){
        alert("Felicitaciones, te has ganado un gran premio")
        location.reload()
    }
    else{
        alert("Lo siento, el número era " + num + "\n Si desea puede volver a jugar")
        location.reload()
    }
})