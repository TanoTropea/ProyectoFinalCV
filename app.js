var botonExpOjs = document.getElementById("botonExpO");
var botonExpMjs = document.getElementById("botonExpM");
var ocultar_exp = document.getElementById("ExperienciaLaboralJS")
var botonEstOjs = document.getElementById("botonEstO");
var botonEstMjs = document.getElementById("botonEstM");
var ocultar_est = document.getElementById("EstudiosJS")


botonExpOjs.addEventListener("click", function () {
    console.log("Ocultamos la sección Experiencia Laboral");
    ocultar_exp.style.display = 'none';
});

botonExpMjs.addEventListener("click", function () {
    console.log("Volvemos a mostrar la sección Esperiencia Laboral");
    ocultar_exp.style.display = '';
});

botonEstOjs.addEventListener("click", function () {
    console.log("Ocultamos la sección Estudios");
    ocultar_est.style.display = 'none';
});

botonEstMjs.addEventListener("click", function () {
    console.log("Volvemos a mostrar la sección Estudios");
    ocultar_est.style.display = '';
});