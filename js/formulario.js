$(document).ready(function () {
    $("#formUsuario").on("submit", enviarFormulario);
    $("#btnCancelar").on("click", limpiarFormulario);

    $("#nombre, #usuario, #fechaIngreso, #email, #sitioWeb").on("input change", function () {
        validarCampo($(this));
    });
});

function enviarFormulario(event) {
    event.preventDefault();

    const formularioValido = validarFormulario();

    if (!formularioValido) {
        alert("Revisa los campos marcados antes de enviar.");
        return;
    }

    const nuevoUsuario = {
        nombre: $("#nombre").val().trim(),
        usuario: $("#usuario").val().trim(),
        fechaIngreso: $("#fechaIngreso").val().trim(),
        email: $("#email").val().trim(),
        sitioWeb: $("#sitioWeb").val().trim()
    };

    console.log("Usuario registrado:", nuevoUsuario);

    alert("Datos enviados correctamente.");

    limpiarFormulario();

    window.location.href = "index.html";
}

function validarFormulario() {
    const campos = [
        $("#nombre"),
        $("#usuario"),
        $("#fechaIngreso"),
        $("#email"),
        $("#sitioWeb")
    ];

    let formularioValido = true;

    campos.forEach(function (campo) {
        const campoValido = validarCampo(campo);

        if (!campoValido) {
            formularioValido = false;
        }
    });

    return formularioValido;
}

function validarCampo(campo) {
    const id = campo.attr("id");
    const valor = campo.val().trim();
    let valido = true;

    if (id === "nombre") {
        valido = valor !== "";
    }

    if (id === "usuario") {
        valido = valor !== "";
    }

    if (id === "fechaIngreso") {
        valido = validarFecha(valor);
    }

    if (id === "email") {
        valido = validarEmail(valor);
    }

    if (id === "sitioWeb") {
        valido = valor === "" || validarUrl(valor);
    }

    aplicarEstadoCampo(campo, valido);

    return valido;
}

function aplicarEstadoCampo(campo, valido) {
    campo.removeClass("is-valid is-invalid");

    if (valido) {
        campo.addClass("is-valid");
    } else {
        campo.addClass("is-invalid");
    }
}

function validarFecha(valor) {
    if (valor === "") {
        return false;
    }

    const regexFechaTexto = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const regexFechaDate = /^\d{4}-\d{2}-\d{2}$/;

    if (regexFechaTexto.test(valor)) {
        const partes = valor.split("/");
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const anio = parseInt(partes[2], 10);

        const fecha = new Date(anio, mes, dia);

        return (
            fecha.getFullYear() === anio &&
            fecha.getMonth() === mes &&
            fecha.getDate() === dia
        );
    }

    if (regexFechaDate.test(valor)) {
        const fecha = new Date(valor);
        return !isNaN(fecha.getTime());
    }

    return false;
}

function validarEmail(valor) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(valor);
}

function validarUrl(valor) {
    try {
        new URL(valor);
        return true;
    } catch (error) {
        return false;
    }
}

function limpiarFormulario() {
    $("#formUsuario")[0].reset();

    $("#nombre, #usuario, #fechaIngreso, #email, #sitioWeb").removeClass(
        "is-valid is-invalid"
    );
}