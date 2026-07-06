# FRONTEND_U3_EVALUACION_DATATABLES
Evaluacion 3 de frontend
# Evaluacion Unidad 3 - Desarrollo de Aplicaciones Web

WebApp desarrollada con HTML, CSS, JavaScript, jQuery y jQuery DataTables.

## Descripcion

La aplicacion permite visualizar usuarios obtenidos desde JSONPlaceholder mediante una tabla DataTables y simular el registro de un nuevo usuario usando un formulario web con validaciones en JavaScript.

## Estructura

- `index.html`: pagina principal con tabla de usuarios.
- `formulario.html`: formulario para simular el ingreso de un nuevo usuario.
- `css/styles.css`: estilos personalizados.
- `js/index.js`: carga de datos y configuracion de DataTables.
- `js/formulario.js`: validaciones, limpieza y simulacion de envio del formulario.

## Tecnologias usadas

- HTML5
- CSS3
- Bootstrap
- JavaScript
- jQuery
- jQuery DataTables
- JSONPlaceholder

## Validaciones del formulario

- Nombre obligatorio.
- Usuario obligatorio.
- Fecha de ingreso obligatoria con formato `dd/mm/yyyy`.
- Email obligatorio con formato valido.
- Sitio web opcional con formato URL valido.

## Fuente de datos

Los usuarios se obtienen desde:

https://jsonplaceholder.typicode.com/users