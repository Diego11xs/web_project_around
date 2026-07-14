# 🌎 TripleTen - web_project_around

# Around The U.S.

## GitHub Pages

[Ver proyecto publicado](https://diego11xs.github.io/web_project_around/)

## 🧾 Descripción

Around The U.S. es una aplicación web responsiva desarrollada como parte del programa de Desarrollo Web de TripleTen.

El proyecto permite administrar un perfil de usuario y una galería interactiva de lugares emblemáticos. Los usuarios pueden editar su información personal, agregar nuevas tarjetas, eliminar tarjetas existentes, marcar lugares como favoritos y visualizar imágenes en pantalla completa mediante ventanas emergentes.

En esta versión se implementó una arquitectura basada en Programación Orientada a Objetos (POO), utilizando clases especializadas, herencia y módulos ES6 para mejorar la organización, reutilización y escalabilidad del código.

🚀 Funcionalidades
👤 Gestión de perfil
🖋️ Edición de nombre y ocupación mediante formulario emergente.
💾 Actualización dinámica de la información del usuario.
🔄 Carga automática de los datos actuales al abrir el formulario.
❌ Cierre de ventanas emergentes mediante botón, tecla ESC o clic sobre el overlay.
🖼️ Gestión de tarjetas
➕ Creación dinámica de nuevas tarjetas.
❤️ Marcado y desmarcado de tarjetas favoritas.
🗑️ Eliminación de tarjetas individuales.
🔍 Visualización de imágenes en tamaño completo.
🖼️ Actualización automática del contenido del popup de imagen.
✔️ Validación de formularios
Validación personalizada utilizando la API nativa de HTML5.
Mensajes de error dinámicos.
Habilitación y deshabilitación automática de botones de envío.
Restablecimiento del estado de validación al cerrar formularios.
🧩 Arquitectura orientada a objetos
Clase Card para la creación y gestión de tarjetas.
Clase Section para renderizar colecciones de elementos.
Clase Popup como clase base para ventanas emergentes.
Clase PopupWithForm para formularios emergentes.
Clase PopupWithImage para visualización de imágenes.
Clase UserInfo para administrar la información del usuario.
Separación clara de responsabilidades mediante módulos ES6.
📱 Diseño responsivo
💻 Desktop: 3 columnas.
📱 Tablet: 2 columnas.
📱 Mobile: 1 columna.

El diseño se adapta correctamente a diferentes resoluciones y tamaños de pantalla.

🧩 Tecnologías utilizadas
HTML5
Estructura semántica.
CSS3
Flexbox.
Grid Layout.
Media Queries.
Animaciones y transiciones.
JavaScript (ES6)
Manipulación del DOM.
Programación Orientada a Objetos (POO).
Clases y herencia.
Módulos ES6 (import/export).
Manejo de eventos.
Formularios dinámicos.
Componentes reutilizables.
Normalize.css
Consistencia visual entre navegadores.

🗂️ Estructura del proyecto
project/
│
├── index.html
│
├── pages/
│ └── index.css
│
├── scripts/
│ ├── index.js
│ ├── cards.js
│ ├── Card.js
│ ├── Section.js
│ ├── Popup.js
│ ├── PopupWithForm.js
│ ├── PopupWithImage.js
│ ├── UserInfo.js
│ └── FormValidator.js
│
├── images/
│ ├── Logo.png
│ ├── profile.png
│ ├── editar.png
│ ├── add-button.png
│ ├── yosemite.jpg
│ ├── louise.jpg
│ ├── calvas.jpg
│ ├── latemar.jpg
│ ├── vanois.jpg
│ └── braies.png
│
└── README.md
💡 Aprendizajes clave

Durante el desarrollo de este proyecto se reforzaron los siguientes conceptos:

Programación Orientada a Objetos (POO).
Herencia entre clases.
Encapsulación de responsabilidades.
Modularización mediante ES6 Modules.
Manipulación dinámica del DOM.
Renderizado de componentes reutilizables.
Gestión de formularios y validación.
Implementación de ventanas emergentes reutilizables.
Organización y escalabilidad de proyectos frontend.
Desarrollo responsivo y experiencia de usuario.
🧑‍💻 Autor

Diego Granados

Desarrollador Frontend en formación 💻

TripleTen - Sprint 11 (2026)
