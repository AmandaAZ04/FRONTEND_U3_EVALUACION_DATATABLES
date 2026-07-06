$(document).ready(function () {
    $("#formUsuario").on("submit", enviarFormulario);
    $("#btnCancelar").on("click", limpiarFormulario);

    $("#nombre, #usuario, #fechaIngreso, #email, #sitioWeb").on("input change", function () {
        validarCampo($(this));
    });

    $("#fechaIngreso").on("input change", actualizarEstadoFecha);
    $("#contenedorFechaIngreso, #fechaIngreso").on("click", abrirCalendarioFecha);

    actualizarEstadoFecha();
});

function abrirCalendarioFecha() {
    const campoFecha = document.getElementById("fechaIngreso");

    campoFecha.focus();

    if (typeof campoFecha.showPicker === "function") {
        campoFecha.showPicker();
    }
}

function actualizarEstadoFecha() {
    const campoFecha = $("#fechaIngreso");

    if (campoFecha.val() === "") {
        campoFecha.removeClass("has-value");
    } else {
        campoFecha.addClass("has-value");
    }
}

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
        fechaIngreso: $("#fechaIngreso").val(),
        email: $("#email").val().trim(),
        sitioWeb: obtenerSitioWebCompleto()
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
        if (!validarCampo(campo)) {
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
        valido = validarNombre(valor);
    }

    if (id === "usuario") {
        valido = validarUsuario(valor);
    }

    if (id === "fechaIngreso") {
        valido = validarFecha(valor);
        actualizarEstadoFecha();
    }

    if (id === "email") {
        valido = validarEmail(valor);
    }

    if (id === "sitioWeb") {
        valido = valor === "" || validarSitioWeb(valor);
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

function validarNombre(valor) {
    if (valor === "") {
        return false;
    }

    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regexNombre.test(valor);
}

function validarUsuario(valor) {
    if (valor === "") {
        return false;
    }

    return !contienePalabrasProhibidas(valor);
}

function contienePalabrasProhibidas(valor) {
    const usuarioNormalizado = normalizarTexto(valor);

    const palabrasProhibidas = [
        "pene",
        "pico",
        "pichula",
        "tula",
        "vagina",
        "sexo",
        "mierda",
        "weon",
        "hueon",
        "ctm",
        "puta",
        "puto",
        "maraco",
        "maraca",
        "zorra",
        "perra",
        "imbecil",
        "idiota",
        "estupido",
        "estupida",
        "retrasado",
        "retrasada",
        "mongolico",
        "mongolica"
    ];

    return palabrasProhibidas.some(function (palabra) {
        return usuarioNormalizado.includes(palabra);
    });
}

function normalizarTexto(valor) {
    return valor
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/0/g, "o")
        .replace(/1/g, "i")
        .replace(/3/g, "e")
        .replace(/4/g, "a")
        .replace(/5/g, "s")
        .replace(/7/g, "t")
        .replace(/@/g, "a")
        .replace(/\$/g, "s")
        .replace(/[^a-z]/g, "");
}

function validarFecha(valor) {
    if (valor === "") {
        return false;
    }

    const fecha = new Date(valor + "T00:00:00");
    return !isNaN(fecha.getTime());
}

function validarEmail(valor) {
    if (valor === "") {
        return false;
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(valor)) {
        return false;
    }

    const dominio = valor.split("@")[1].toLowerCase();

    const dominiosPermitidos = [
        "gmail.com",
        "hotmail.com",
        "hotmail.cl",
        "outlook.com",
        "outlook.cl",
        "live.com",
        "yahoo.com",
        "yahoo.cl",
        "icloud.com",
        "proton.me",
        "protonmail.com",
        "inacapmail.cl"
    ];

    return dominiosPermitidos.includes(dominio);
}

function validarSitioWeb(valor) {
    const sitioCompleto = $("#protocoloSitio").val() + valor.trim();

    try {
        const url = new URL(sitioCompleto);
        return url.hostname.includes(".") && url.hostname.length >= 4;
    } catch (error) {
        return false;
    }
}

function obtenerSitioWebCompleto() {
    const sitio = $("#sitioWeb").val().trim();

    if (sitio === "") {
        return "";
    }

    return $("#protocoloSitio").val() + sitio;
}

function limpiarFormulario() {
    $("#formUsuario")[0].reset();

    $("#nombre, #usuario, #fechaIngreso, #email, #sitioWeb").removeClass(
        "is-valid is-invalid has-value"
    );

    actualizarEstadoFecha();
}