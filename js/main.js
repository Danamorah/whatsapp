// padre.appendChild(hijo)

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myFunction() {
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    //x.innerHTML = h + ":" + m;
    return h + ":" + m;
}


function enviar(){
	// obtener el valor del input//
	var mensaje = document.getElementById("mensajes").value;
	//document.getElementById("chat").innerHTML = mensaje;
	//chat.appendChild("w-message-out");
	//var mensajeDiv = document.createElement("div");
	//mensajeDiv.classList.add("w-message-out")
	var elemento = document.createElement("p");
	var mensajenodo = document.createTextNode(mensaje);
	//mensajeDiv.appendChild(elemento);
    elemento.appendChild(mensajenodo);
    //document.getElementById("conversacion").appendChild(elemento);
    //document.getElementById("conversacion").classList.add("w-message");
    //document.getElementById("conversacion").classList.add("w-message-out");
    var styleMensaje = document.createElement("div");
    styleMensaje.classList.add("w-message");
    styleMensaje.classList.add("w-message-out");
    var divMensaje = document.createElement("div");
    var time = document.createElement("div");
    time.classList.add("time");
    time.innerHTML = myFunction();
    divMensaje.appendChild(time);
    document.getElementById("conversacion").appendChild(styleMensaje);
    styleMensaje.appendChild(divMensaje);
    divMensaje.classList.add("w-message-text");
    divMensaje.appendChild(elemento);
}

function chat(){
	document.getElementById("raymi").classList.add("avatar");
}