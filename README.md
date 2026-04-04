🌎 Tripleten web_project_around
Around The U.S.
🧾 Descripción

Around The U.S. es una aplicación web responsiva desarrollada como parte del Sprint 7 del programa de desarrollo web de TripleTen.

El proyecto permite editar la información del perfil del usuario mediante popups interactivos y gestionar una galería dinámica de tarjetas con imágenes de lugares emblemáticos. Cada tarjeta puede ser creada, eliminada, marcada como favorita y visualizada en pantalla completa, todo sin recargar la página.

🚀 Funcionalidades
👤 Perfil

🖋️ Editar perfil: Modifica el nombre y la ocupación del usuario mediante un popup.

💾 Guardar cambios: Los datos se actualizan dinámicamente en la interfaz.

❌ Cerrar popup: Disponible mediante botón de cierre o tecla ESC.

🖼️ Galería de tarjetas

➕ Agregar nuevas tarjetas con título e imagen mediante formulario.

❤️ Like interactivo que se mantiene activo visualmente.

🗑️ Eliminar tarjetas con animación de salida.

🔍 Vista previa de imagen en pantalla completa al hacer click.

🧭 Imagen centrada y proporcional, respetando su tamaño original.

❌ Cerrar preview con botón o tecla ESC.

📱 Responsive Design

💻 Desktop: 3 columnas.

📱 Tablet: 2 columnas.

📱 Mobile: 1 columna.

Diseño adaptable en perfiles, tarjetas y popups.

🧩 Tecnologías utilizadas

HTML5 → Estructura semántica.

CSS3

Flexbox

Grid Layout

Animaciones y transiciones

Media Queries (Desktop / Tablet / Phone)

JavaScript (Vanilla JS)

Manipulación del DOM

Manejo de eventos

Formularios dinámicos

Componentes reutilizables (tarjetas)

Normalize.css → Consistencia entre navegadores.

🗂️ Estructura del proyecto
project/
│
├── index.html
├── pages/
│ └── index.css
│
├── scripts/
│ ├── index.js # Lógica de popups y eventos generales
│ ├── cards.js # Creación y manejo de tarjetas
│ └── validate.js # Validación de formularios
│
├── images/
│ ├── Logo.png
│ ├── profile.png
│ ├── editar.png
│ ├── add-button.png
│ ├── Close-button.png
│ ├── Trash.png
│ ├── Trashover.png
│ ├── like.svg
│ ├── like-hover.svg
│ ├── like_active.svg
│ ├── yosemite.jpg
│ ├── louise.jpg
│ ├── calvas.jpg
│ ├── latemar.jpg
│ ├── vanoix.jpg
│ └── braies.png
│
└── README.md

💡 Aprendizajes clave
Durante el desarrollo de estos sprints se reforzaron:

Implementación de módulos de JavaScript (ES6) para mantener el código organizado y limpio.

Validación de formularios personalizada utilizando la API de validación de restricciones nativa de HTML5.

Manejo de objetos de configuración para crear funciones reutilizables y escalables.

Cierre de modales dinámicos mediante propagación de eventos (haciendo clic en el overlay).

Manipulación avanzada del DOM y creación de componentes dinámicos (tarjetas).

Uso correcto de event.preventDefault().

Diseño responsive con breakpoints reales y separación de responsabilidades.

🧑‍💻 Autor
Diego Granados
Desarrollador Frontend en formación 💻
📅 Sprint 9 – TripleTen (2026)
