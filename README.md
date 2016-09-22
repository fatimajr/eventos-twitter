# LECCIÓN 26 Eventos twitter

###Descripción de las versiones:

####Versión 0.0.1:
- Diseñar un formulario que tenga un textarea y un botón.
- Agregar un evento de click al botón o un evento de submit al formulario.
- En el evento, coger el texto del textarea.
- Agregar el texto al HTML.

```javascript
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
	function agregarMensaje(txt){
		var parrafo = document.createElement("p");
		parrafo.innerText = txt;
		var imprimir = document.getElementById("imprimir");
		imprimir.insertBefore(parrafo, imprimir.childNodes[0]).classList.add("box");
	};
});
```

####Versión 0.0.2:
- No ingresar texto vacío (deshabilitar el botón de enviar).
- Contar la cantidad de caracteres de forma regresiva.

```javascript
textArea.addEventListener("keydown", function(){
		boton.disabled = false;
		var longitud = textArea.value.length+1;
		cantidadCaracteres(longitud);
		cambioColor(longitud);
};	

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
```

####Versión 0.0.3:
- Si pasa los 140 caracteres, deshabilitar el botón.
- Si pasa los 120 caracteres, mostrar el contador con OTRO color.
- Si pasa los 130 caracteres, mostrar el contador con OTRO color.
- Si pasa los 140 caracteres, mostrar el contador en negativo.

```javascript
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
```
####Versión 0.0.4:
- Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto.

```javascript
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
``` 

####Versión 0.0.5: (Extra)
- Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica)
- Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm

```javascript
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
```
![eventos twitter](http://3.1m.yt/lPZRtU.png "twitter")
