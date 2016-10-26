var eventoButton=document.getElementById("agregarTarea");
	eventoButton=document.addEventListener("click", sumaTarea);

function sumaTarea(){
	var caja=document.getElementById("caja1");
	var lista=document.createElement("li");
	caja=document.createElement("input");
	caja.setAttribute("placeholder","Coloca Texto");
	lista.appendChild("caja1");
}