
window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	var textArea = document.getElementById("texto");
	var contador = document.getElementById("contador");
	var caracteres = contador.innerHTML = 140; 

	boton.addEventListener ("click", function(e){
		e.preventDefault();//para que cambie al submit del boton y no recarge la pagina
		agregarMensaje(textArea.value);
		textArea.value = "";
		caracteres = 140;
		boton.disabled = true;
	});

	function agregarMensaje(txt){
		var parrafo = document.createElement("p")
		parrafo.innerText = txt;
		var imprimir = document.getElementById("imprimir");
		imprimir.insertBefore(parrafo, imprimir.childNodes[0]).classList.add("box");;
	}

	textArea.addEventListener("keydown", function(){
		boton.disabled = false;
		var longitud = textArea.value.length;
		if(longitud <= caracteres){
			contador.innerHTML = caracteres - longitud;
		}else{
			contador.innerHTML = caracteres - longitud;
		}
		if(longitud > caracteres){
			boton.disabled = true;
		}
		if(longitud > 120){
			contador.style.color = "purple";
		}
		if(longitud > 130){
			contador.style.color = "orange";
		}

	})
});
