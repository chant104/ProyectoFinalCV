//Botones de contactos

document.getElementById('mail-button').onclick = function () {
    document.getElementById('mail-button').innerHTML = "julialvarez09@gmail.com";
}

document.getElementById('wsp-button').onclick = function () {
    document.getElementById('wsp-button').innerHTML = "+54 1234 567890";
}

//Controles de las imagenes deslizantes

let slideIndex = 1;
showSlides(slideIndex);

function moverPresentacion(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Presentacion");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}