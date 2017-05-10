/*Mostrar los label cuando los input estan seleccionados*/
var arrayInput = document.getElementsByClassName("js-input");
console.log(arrayInput);
for(var i=0; i<arrayInput.length; i++){
	arrayInput[i].onfocus = mostrarLabel;
}

function mostrarLabel(){
	var label = this.previousElementSibling;
	label.classList.add("mostrar-label");
}

/*Cambiar el background de las anclas del header*/
window.addEventListener("scroll",function(){
	var indexScroll = window.pageYOffset;
	var resetScroll = 0;
	if(indexScroll>resetScroll){
		document.getElementsByClassName("name-proyecto")[0].style.fontSize = "1em";
	}else{
		document.getElementsByClassName("name-proyecto")[0].removeAttribute("style");
	}

	if(indexScroll<634){
		document.getElementById("js-portafolio").classList.remove("active");
	}

	if(indexScroll>=634 && indexScroll<=1414){
		document.getElementById("js-portafolio").classList.add("active");
		document.getElementById("js-portafolio").nextElementSibling.classList.remove("active");
	}

	if(indexScroll>1414 && indexScroll<1947){
		document.getElementById("js-about").previousElementSibling.classList.remove("active");
		document.getElementById("js-about").nextElementSibling.classList.remove("active");
		document.getElementById("js-about").classList.add("active");
	}

	if(indexScroll>=1947 && indexScroll<2144){
		document.getElementById("js-contact").previousElementSibling.classList.remove("active");
		document.getElementById("js-contact").classList.add("active");
	}
});

//hover a la imagenesdel portafolio
var arrayImagen = document.getElementsByClassName("js-img-portafolio");
for(var i=0; i<arrayImagen.length; i++){
	console.log(arrayImagen.lastElementChild);
	arrayImagen[i].addEventListener("mouseover", function(){
		this.lastElementChild.style.visibility = "visible";
	})
	arrayImagen[i].addEventListener("mouseout", function(){
		this.lastElementChild.removeAttribute("style");
	})
}
