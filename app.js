var botonExpOjs = document.getElementById("botonExpO");
var ocultar_exp = document.getElementById("ExperienciaLaboralJS")
var botonEstOjs = document.getElementById("botonEstO");
var ocultar_est = document.getElementById("EstudiosJS")

botonExpOjs.addEventListener("click", function () {
    if(ocultar_exp.style.display === 'none') {
    ocultar_exp.style.display = '';
    botonExpOjs.innerHTML = "<i class='fa-regular fa-circle-xmark'></i>";
    } else {
    ocultar_exp.style.display = 'none';
    botonExpOjs.innerHTML = "<i class='fa-regular fa-circle-down'></i>";
    }
    });

botonEstOjs.addEventListener("click", function () { 
    if(ocultar_est.style.display === 'none') {
        ocultar_est.style.display = '';
        botonEstOjs.innerHTML = "<i class='fa-regular fa-circle-xmark'></i>";
    } else {
        ocultar_est.style.display = 'none';
        botonEstOjs.innerHTML = "<i class='fa-regular fa-circle-down'></i>";
    }
});

/*Añadir la misma funcionalidad de Ocultar/Mostrar en INFO y Conocimientos.*/