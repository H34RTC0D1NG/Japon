const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorMensaje = document.getElementById("errorMensaje");

const mensajeExito = document.getElementById("mensajeExito");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let formularioValido = true;

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMensaje.textContent = "";

    nombre.classList.remove("campo-error");
    correo.classList.remove("campo-error");
    mensaje.classList.remove("campo-error");

    mensajeExito.textContent = "";

    if (nombre.value.trim() === "") {
        errorNombre.textContent = "Por favor, introduce tu nombre.";
        nombre.classList.add("campo-error");
        formularioValido = false;
    }

    if (correo.value.trim() === "") {

        errorCorreo.textContent = "Por favor, introduce tu correo electrónico.";
        correo.classList.add("campo-error");
        formularioValido = false;

    } else {

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correo.value.trim())) {
            errorCorreo.textContent = "Introduce un correo electrónico válido.";
            correo.classList.add("campo-error");
            formularioValido = false;
        }
    }

    if (mensaje.value.trim() === "") {
        errorMensaje.textContent = "Por favor, escribe un mensaje.";
        mensaje.classList.add("campo-error");
        formularioValido = false;
    }

    if (formularioValido) {
        mensajeExito.textContent = "El formulario es válido. Tu mensaje está listo para enviarse.";
    }

});