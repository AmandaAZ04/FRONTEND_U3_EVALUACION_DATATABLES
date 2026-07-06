const urlUsuarios = "https://jsonplaceholder.typicode.com/users";

$(document).ready(function () {
    cargarTablaUsuarios();
});

function cargarTablaUsuarios() {
    $("#tablaUsuarios").DataTable({
        ajax: {
            url: urlUsuarios,
            dataSrc: ""
        },
        columns: [
            { data: "id", title: "N°" },
            { data: "name", title: "Nombre" },
            { data: "username", title: "Usuario" },
            { data: "email", title: "Email" },
            {
                data: "website",
                title: "Sitio Web",
                render: function (data) {
                    return `<a href="https://${data}" target="_blank">${data}</a>`;
                }
            }
        ],
        language: {
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "No hay registros disponibles",
            infoFiltered: "(filtrado de _MAX_ registros)",
            zeroRecords: "No se encontraron resultados",
            loadingRecords: "Cargando usuarios...",
            paginate: {
                first: "Primero",
                last: "Ultimo",
                next: "Siguiente",
                previous: "Anterior"
            }
        }
    });
}