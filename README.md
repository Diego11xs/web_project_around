# 🌎 TripleTen - web_project_around

# Around The U.S.

## GitHub Pages

[Ver proyecto publicado](https://diego11xs.github.io/web_project_around/)

## 🧾 Descripción

Around The U.S. es una aplicación web responsiva que permite gestionar un perfil de usuario y una galería interactiva de lugares.

La aplicación está conectada a una API REST, por lo que los cambios realizados en el perfil, avatar, tarjetas y likes permanecen guardados después de actualizar la página.

El proyecto utiliza Programación Orientada a Objetos, herencia, módulos ES6 y solicitudes asíncronas para mantener una estructura organizada, reutilizable y escalable.

🚀 Funcionalidades
👤 Gestión del perfil
Carga automática de la información del usuario desde la API.
Edición del nombre y la ocupación.
Actualización de la foto de perfil mediante una URL.
Persistencia de los cambios después de recargar la página.
Estado de carga durante las solicitudes.
🖼️ Gestión de tarjetas
Obtención de las tarjetas desde la API.
Creación de nuevas tarjetas.
Inserción de tarjetas nuevas al principio de la galería.
Eliminación de tarjetas propias.
Ocultamiento del botón de eliminación en tarjetas ajenas.
Confirmación antes de eliminar una tarjeta.
Vista ampliada de las imágenes.
Eliminación visual con una transición.
❤️ Likes
Registro de likes mediante la API.
Eliminación de likes.
Actualización visual del corazón.
Persistencia del estado después de recargar la página.
✔️ Validación de formularios
Validación personalizada mediante la API nativa de HTML5.
Mensajes de error dinámicos.
Habilitación y deshabilitación automática de los botones.
Restablecimiento de errores al volver a abrir los formularios.
Validación del formulario de perfil, nueva tarjeta y avatar.
🪟 Ventanas emergentes

Los popups pueden cerrarse mediante:

El botón de cierre.
La tecla Escape.
Un clic sobre el overlay.

La eliminación utiliza un popup especializado para solicitar confirmación antes de enviar la petición a la API.

⏳ Estados de carga

Los botones muestran información durante las solicitudes asíncronas:

Guardando...
Eliminando...

Esto evita envíos repetidos y proporciona retroalimentación visual al usuario.

🧩 Arquitectura orientada a objetos

El proyecto utiliza las siguientes clases:

Api: administra las solicitudes a la API REST.
Card: crea y gestiona cada tarjeta.
Section: renderiza colecciones de elementos.
Popup: clase base para las ventanas emergentes.
PopupWithForm: administra popups con formularios.
PopupWithImage: muestra imágenes ampliadas.
PopupWithConfirmation: confirma la eliminación de tarjetas.
UserInfo: administra la información del usuario.
FormValidator: controla la validación de formularios.

Cada clase tiene una responsabilidad específica y se encuentra en su propio módulo.

🌐 Integración con API

La aplicación se comunica con la API de TripleTen para realizar las siguientes operaciones:

Obtener la información del usuario.
Obtener las tarjetas iniciales.
Actualizar el perfil.
Actualizar el avatar.
Crear tarjetas.
Eliminar tarjetas.
Agregar likes.
Retirar likes.

La información del usuario y las tarjetas se carga simultáneamente mediante Promise.all().

Las solicitudes utilizan los métodos HTTP:

GET
POST
PATCH
PUT
DELETE

Los errores de las solicitudes se gestionan mediante .catch().

📱 Diseño responsivo

La galería se adapta a diferentes tamaños de pantalla:

Desktop: tres columnas.
Tablet: dos columnas.
Mobile: una columna.

El diseño utiliza CSS Grid, Flexbox y media queries.

🛠️ Tecnologías utilizadas
HTML5
Estructura semántica.
Formularios.
Plantillas mediante <template>.
Atributos de accesibilidad.
CSS3
Flexbox.
Grid Layout.
Metodología BEM.
Media queries.
Animaciones y transiciones.
Diseño responsivo.
JavaScript ES6
Manipulación del DOM.
Programación Orientada a Objetos.
Clases y herencia.
Módulos ES6.
Promesas.
API Fetch.
Manejo de eventos.
Formularios dinámicos.
Componentes reutilizables.
🗂️ Estructura principal

web_project_around/
├── components/
│ ├── Api.js
│ ├── Card.js
│ ├── FormValidator.js
│ ├── Popup.js
│ ├── PopupWithConfirmation.js
│ ├── PopupWithForm.js
│ ├── PopupWithImage.js
│ ├── Section.js
│ └── UserInfo.js
│
├── pages/
│ ├── index.css
│ └── index.js

▶️ Ejecución local

Debido al uso de módulos ES6, se recomienda ejecutar el proyecto mediante un servidor local.

Puede utilizarse la extensión Live Server de Visual Studio Code:

Clonar o descargar el repositorio.
Abrir la carpeta del proyecto en Visual Studio Code.
Abrir index.html mediante Live Server.
💡 Aprendizajes clave

Durante este proyecto se reforzaron los siguientes conceptos:

Consumo de una API REST.
Manejo de solicitudes asíncronas.
Uso de Promise.all().
Programación Orientada a Objetos.
Herencia entre clases.
Encapsulación de responsabilidades.
Modularización mediante ES6 Modules.
Validación de formularios.
Actualización de la interfaz con datos del servidor.
Manejo de estados de carga.
Gestión de errores.
Desarrollo responsivo.
Accesibilidad básica.
Organización y escalabilidad de proyectos frontend.
🧑‍💻 Autor

Diego Granados

Desarrollador Frontend en formación.

TripleTen — Sprint 12, 2026.
