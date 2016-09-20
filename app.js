
window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	var textArea = document.getElementById("texto");
	var contador = document.getElementById("contador");
	var caracteres = contador.innerHTML = 140; 
	textArea.addEventListener("keydown", autosize);
	boton.addEventListener ("click", function(e){
		e.preventDefault();//para que cambie al submit del boton y no recarge la pagina
		agregarMensaje(textArea.value);
		textArea.value = "";
		contador.innerHTML = 140;
		boton.disabled = true;
		contador.classList.remove("purple");
		contador.classList.remove("white");
		resize();
		verHora();
	});
	textArea.addEventListener("keydown", function(){
		boton.disabled = false;
		var longitud = textArea.value.length+1;
		cantidadCaracteres(longitud);
		cambioColor(longitud);
	});
	function agregarMensaje(txt){
		var parrafo = document.createElement("p");
		parrafo.innerText = txt;
		var imprimir = document.getElementById("imprimir");
		imprimir.insertBefore(parrafo, imprimir.childNodes[0]).classList.add("box");
	};
	function autosize(){
 		var el = this;
  		setTimeout(function(){
		    el.style.cssText = 'height:auto; padding:0';
		    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  		},0);
	};
	function resize() {
       textArea.style.cssText = "height: auto";
   	}
	function cantidadCaracteres(longitud){
		if(longitud <= caracteres){
			contador.innerHTML = caracteres - longitud;
		}else{
			contador.innerHTML = caracteres - longitud;
		}
		if(longitud > caracteres){
			boton.disabled = true;
		}
	};
	function cambioColor(longitud){
		if(longitud > 120){
			contador.classList.add("purple");
		}
		if(longitud > 130){
			contador.classList.add("white");
		}
		if(longitud < 120){
			contador.classList.remove("purple");
		}
		if(longitud < 130){
			contador.classList.remove("white");
		}
	};
	function verHora(){
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		if (minuto < 10){
			minuto = "0" + minuto; 
		}
		var mostrarHora = hora + ":" + minuto;
		var horario = document.createElement("div");
		horario.innerText = mostrarHora;
		var imprimir = document.getElementById("imprimir");
		imprimir.insertBefore(horario, imprimir.childNodes[1]);
	}
});