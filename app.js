window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	boton.addEventListener ("click", function(e){
		e.preventDefault();//para que cambie al submit del boton y no recarge la pagina
		var txt = document.getElementById("texto").value;
		var hijo2 = document.createElement("p");
		hijo2.innerText = txt;
		var imprimir = document.getElementById("imprimir");
		imprimir.insertBefore(hijo2, imprimir.childNodes[0]);
		document.getElementById("texto").value = "";
	});
});


