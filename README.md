# 🌎 TripleTen - web_project_around

# Around The U.S.

## GitHub Pages

[Ver proyecto publicado](https://diego11xs.github.io/web_project_around/)

## 🧾 Descripción

Around The U.S. es una aplicación web responsiva desarrollada como parte del programa de Desarrollo Web de TripleTen.

El proyecto permite editar la información del perfil del usuario mediante ventanas modales interactivas y gestionar una galería dinámica de tarjetas con imágenes de lugares emblemáticos. Cada tarjeta puede ser creada, eliminada, marcada como favorita y visualizada en pantalla completa, todo sin recargar la página.

En esta versión del proyecto se implementó una arquitectura basada en Programación Orientada a Objetos (POO) y módulos ES6, mejorando la organización, reutilización y escalabilidad del código.

---

# 🚀 Funcionalidades

## 👤 Perfil

- 🖋️ Editar perfil mediante un formulario emergente.
- 💾 Actualización dinámica del nombre y ocupación del usuario.
- ❌ Cierre del popup mediante botón, tecla ESC o clic sobre el overlay.

## 🖼️ Galería de tarjetas

- ➕ Agregar nuevas tarjetas con título e imagen.
- ❤️ Marcar tarjetas como favoritas.
- 🗑️ Eliminar tarjetas con animación.
- 🔍 Visualizar imágenes en pantalla completa.
- 📱 Adaptación automática del contenido al tamaño de la imagen.
- ❌ Cierre del popup de imagen mediante botón, ESC o clic sobre el overlay.

## ✔️ Validación de formularios

- Validación personalizada utilizando la API nativa de HTML5.
- Mensajes de error dinámicos.
- Botones Submit habilitados y deshabilitados automáticamente.
- Restablecimiento del estado de validación al cerrar los formularios.

## 📱 Diseño responsivo

- 💻 Desktop: 3 columnas.
- 📱 Tablet: 2 columnas.
- 📱 Mobile: 1 columna.

El diseño se adapta correctamente a distintos tamaños de pantalla.

---

# 🧩 Tecnologías utilizadas

### HTML5

- Estructura semántica.

### CSS3

- Flexbox.
- Grid Layout.
- Media Queries.
- Animaciones y transiciones.

### JavaScript (ES6)

- Manipulación del DOM.
- Programación Orientada a Objetos (POO).
- Clases y objetos.
- Módulos ES6 (import/export).
- Manejo de eventos.
- Formularios dinámicos.
- Componentes reutilizables.

### Normalize.css

- Consistencia visual entre navegadores.

---

# 🗂️ Estructura del proyecto

```
project/
│
├── index.html
│
├── pages/
│   └── index.css
│
├── scripts/
│   ├── index.js
│   ├── Card.js
│   ├── FormValidator.js
│   ├── utils.js
│   └── cards.js
│
├── images/
│   ├── Logo.png
│   ├── profile.png
│   ├── editar.png
│   ├── add-button.png
│   ├── Close-button.png
│   ├── Trash.png
│   ├── Trashover.png
│   ├── like.svg
│   ├── like-hover.svg
│   ├── like_active.svg
│   ├── yosemite.jpg
│   ├── louise.jpg
│   ├── calvas.jpg
│   ├── latemar.jpg
│   ├── vanoix.jpg
│   └── braies.png
│
└── README.md
```

---

# 💡 Aprendizajes clave

Durante el desarrollo de este proyecto se reforzaron los siguientes conceptos:

- Programación Orientada a Objetos (POO).
- Creación e implementación de clases reutilizables.
- Modularización del código mediante ES6 Modules.
- Organización del proyecto siguiendo separación de responsabilidades.
- Validación avanzada de formularios.
- Uso de objetos de configuración.
- Manipulación dinámica del DOM.
- Gestión de eventos y ventanas modales.
- Desarrollo responsive.
- Buenas prácticas de mantenibilidad y escalabilidad del código.

---

# 🧑‍💻 Autor

**Diego Granados**

Desarrollador Frontend en formación 💻

**TripleTen - Sprint 10 (2026)**
