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
- `js/familyfriendly.js`: listado de palabras prohibidas para el nombre de usuario.

## Tecnologias usadas

- HTML5
- CSS3
- Bootstrap
- JavaScript
- jQuery
- jQuery DataTables
- JSONPlaceholder

## Validaciones del formulario

- Nombre obligatorio y solo con letras.
- Usuario obligatorio sin palabras ofensivas.
- Fecha de ingreso obligatoria mediante calendario.
- Email obligatorio con dominios permitidos.
- Sitio web opcional con selector de protocolo `http://` o `https://`.

## Fuente de datos

https://jsonplaceholder.typicode.com/users