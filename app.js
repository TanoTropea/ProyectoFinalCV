var botonExpOjs = document.getElementById("botonExpO");
var botonExpMjs = document.getElementById("botonExpM");
var ocultar_exp = document.getElementById("ExperienciaLaboralJS")
var botonEstOjs = document.getElementById("botonEstO");
var botonEstMjs = document.getElementById("botonEstM");
var ocultar_est = document.getElementById("EstudiosJS")


/* Botones Ocultar y Mostrar ExpLab, Originales. *
botonExpOjs.addEventListener("click", function () {
    console.log("Ocultamos la sección Experiencia Laboral");
    ocultar_exp.style.display = 'none';
});

botonExpMjs.addEventListener("click", function () {
    console.log("Volvemos a mostrar la sección Esperiencia Laboral");
    ocultar_exp.style.display = '';
});
*/

botonExpOjs.addEventListener("click", function () { 
    if(ocultar_exp.style.display === 'none') {
        ocultar_exp.style.display = '';
        botonExpOjs.innerHTML = "Ocultar";
    } else {
        ocultar_exp.style.display = 'none';
        botonExpOjs.innerHTML = "Mostrar";
    }
});

/* Botones Ocultar y Mostrar Estudios, Originales. *
botonEstOjs.addEventListener("click", function () {
    console.log("Ocultamos la sección Estudios");
    ocultar_est.style.display = 'none';
});

botonEstMjs.addEventListener("click", function () {
    console.log("Volvemos a mostrar la sección Estudios");
    ocultar_est.style.display = '';
});
*/

botonEstOjs.addEventListener("click", function () { 
    if(ocultar_est.style.display === 'none') {
        ocultar_est.style.display = '';
        botonEstOjs.innerHTML = "Ocultar";
    } else {
        ocultar_est.style.display = 'none';
        botonEstOjs.innerHTML = "Mostrar";
    }
});