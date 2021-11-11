var item = document.querySelector("#lista-1")

function guardar(){
	sessionStorage.setItem("apunte", item.innerHTML)
	alert("Datos guardada!")

}

function mostrar(){
	if(sessionStorage.getItem("apunte")){
		item.innerHTML = sessionStorage.getItem("apunte")
	}

}

function borrar(){
	sessionStorage.clear()
	location.reload()
	alert("Datos eliminada")


}