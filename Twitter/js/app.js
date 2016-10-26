//Primera función para agregar
var eventoButton=document.getElementById('sumaTarea');
	eventoButton.addEventListener("click", agregarTarea);

function agregarTarea() {
	var textoTarea=document.getElementById("escribirTarea").value;	
	if (textoTarea == 0){
		alert("Coloca tus tareas aquí");
	}else{
		textoTarea=document.createTextNode(textoTarea);
		var listaUl=document.getElementById("lista");
		var lista=document.createElement("li");
		var check=document.createElement("input");
		check.setAttribute("type", "checkbox");
		
		var basura=document.createElement("span");
		basura.classList.add("glyphicon" , "glyphicon-trash");
		
		lista.appendChild(check);
		lista.appendChild(textoTarea);
		lista.appendChild(basura);
		
		listaUl.appendChild(lista);
		}
		
		document.getElementById("escribirTarea").value="";

		basura.onclick=function(){
			lista.parentNode.removeChild(lista);
		};
}

//Segunda función para elimina
	