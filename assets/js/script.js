
function mover() { // Faz o cubo girar
    var angulox = document.querySelector('#angx');
    var anguloy = document.querySelector('#angy');
    var resx = document.querySelector('#resx');
    var resy = document.querySelector('#resy');
    var cubo = document.querySelector('#cube');

    var angx = Number(angulox.value);
    var angy = Number(anguloy.value);
    
    cubo.style.transform = "rotateX(" + angx + "deg)" + "rotateY(" + angy + "deg)";
    resx.innerHTML = angx;
    resy.innerHTML = angy;
}

function grab(i) { // Faz o cursor abrir e fechar no slide
    var angulox = document.querySelector('#angx');
    var anguloy = document.querySelector('#angy');

    if (i == 1) {
        angulox.classList.remove('anga');
        angulox.classList.add('angf');
    } else if(i == 2){
        angulox.classList.remove('angf');
        angulox.classList.add('anga');
    } else if(i == 3) {
        anguloy.classList.remove('anga');
        anguloy.classList.add('angf');
    } else if (i == 4) {
        anguloy.classList.remove('angf');
        anguloy.classList.add('anga');
    }
}

