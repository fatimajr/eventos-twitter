window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	boton.addEventListener ("click", function(e){
		e.preventDefault();//para que cambie al submit del boton y no recarge la pagina
		var textArea = document.getElementById("texto");
		agregarMensaje(textArea.value);
		textArea.value = "";
	});

	function agregarMensaje(txt){
		var parrafo = document.createElement("p")
		parrafo.innerText = txt;
		var imprimir = document.getElementById("imprimir");
		imprimir.insertBefore(parrafo, imprimir.childNodes[0]).classList.add("box");;
	}
});
