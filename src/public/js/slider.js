let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth; //toma el ancho de la pantalla 
let intervalo = 3000;

window.addEventListener("resize",function(){
    width = sliderIndividual[0].clientWidth; //modifica el ancho segun la dimension de la pantalla
})

setInterval( function(){
    slides()
},intervalo);


function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;
    if (contador == sliderIndividual.length) { //cuando llega al ultimo elemento del slider
        setTimeout(function(){
            slider.style.transform = "translate(0px)"; //vuelvo al origen
            slider.style.transition = "tranform 0s"; //0segundod para que no se note el cambio
            contador=1;
        },1500)
    }
}