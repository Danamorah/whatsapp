// padre.appendChild(hijo)

function enviar(){
	// obtener el valor del input//
	var mensaje = document.getElementById("mensajes").value;
	document.getElementById("chat").innerHTML = mensaje;
	//chat.appendChild("w-message-out"); 
}

function chat(){
	document.getElementById("raymi").classList.add("avatar");
}