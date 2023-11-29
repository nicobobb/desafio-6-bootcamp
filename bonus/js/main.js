document.addEventListener("DOMContentLoaded", function () {
  mostrarNombresCompletos("formIntegrante1", "formIntegrante2");

  if (compararNombres("formIntegrante1", "formIntegrante2") == true) {
    console.log("Los nombres son iguales");
  } else {
    console.log("Los nombres son diferentes");
  }
});

function generarNombre(formId) {
  let form = document.getElementById(formId);

  let datos = {};
  form.querySelectorAll("input").forEach(function (input) {
    datos[input.name] = input.value;
  });

  datos.apellido = datos.apellido.toUpperCase();
  datos.segundoApellido = datos.segundoApellido.toUpperCase();
  return datos;
}

function nombreCompleto(formId) {
  let integrante = generarNombre(formId);
  return `${integrante.nombre} ${integrante.segundoNombre} ${integrante.apellido} ${integrante.segundoApellido}`.replace(
    /\s{2,}/g,
    " "
  );
}

function compararNombres(formId1, formId2) {
  let integrante1 = generarNombre(formId1);
  let integrante2 = generarNombre(formId2);

  if (
    integrante1.nombre == integrante2.nombre ||
    integrante1.segundoNombre == integrante2.segundoNombre ||
    integrante1.nombre == integrante2.segundoNombre ||
    integrante1.segundoNombre == integrante2.nombre
  ) {
    return true;
  } else {
    return false;
  }
}

function mostrarNombresCompletos(formId1, formId2) {
  console.log(`
  -----
  Integrante 1: ${nombreCompleto(formId1)}
  Integrante 2: ${nombreCompleto(formId2)}
  -----
  `);
}

function EventoClickFormulario(event, formId) {
  event.preventDefault();
}
