document.addEventListener('DOMContentLoaded', function () {


    function obtenerDatosFormulario(formId) {
        var formulario = document.getElementById(formId);
        var datos = {};

        formulario.querySelectorAll('input').forEach(function (input) {
            datos[input.id] = input.value;
        });

        return datos;
    }

    window.completarFormulario = function () {
        var datosIntegrante1 = obtenerDatosFormulario('formIntegrante1');
        var datosIntegrante2 = obtenerDatosFormulario('formIntegrante2');

        console.log('-----');
        console.log('Integrante 1:', obtenerNombreCompletoFormulario(datosIntegrante1));
        console.log('Integrante 2:', obtenerNombreCompletoFormulario(datosIntegrante2));
        console.log('-----');


        var compararApellidos = confirm('¿Deseas comparar los apellidos?');
        if (compararApellidos) {
          
        }
    };

    function obtenerNombreCompletoFormulario(datos) {
        var nombres = [datos.nombre, datos.segundoNombre];
        var apellidos = [datos.apellido, datos.segundoApellido];

        nombres = nombres.filter(function (nombre) {
            return nombre.trim() !== "";
        });

        apellidos = apellidos.filter(function (apellido) {
            return apellido.trim() !== "";
        });

        var nombreCompleto = nombres.join(' ') + ' ' + apellidos.join(' ');

        return nombreCompleto.toUpperCase(); 
    }
});
