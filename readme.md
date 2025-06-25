# GeoWater - Portal de Reporte Geoespacial

## Descripción del Proyecto

**GeoWater** es una aplicación web desarrollada como proyecto académico para la materia de Programación Orientada a Objetos. La plataforma permite a los usuarios reportar y visualizar incidentes y puntos de interés relacionados con la infraestructura del acueducto en el municipio de Guaduas, Cundinamarca.

El objetivo es proporcionar una herramienta tecnológica para el análisis de problemas recurrentes en el suministro de agua, fomentando la participación ciudadana y ofreciendo una base de datos para futuras soluciones de ingeniería.

---

## Características Principales

* **Interfaz Oscura y Moderna:** Un diseño enfocado en la comodidad visual y la experiencia de usuario.
* **Mapa Interactivo:** Los usuarios pueden seleccionar una ubicación precisa en el mapa para realizar sus reportes.
* **Formulario de Reporte:** Un formulario claro y estructurado para añadir nuevos puntos de interés, basado en el esquema de la base de datos.
* **Diseño Responsivo (Base):** Una estructura fluida que se adapta a diferentes tamaños de pantalla.
* **Páginas Informativas:** Secciones dedicadas a describir el proyecto, sus tecnologías y al autor.

---

## Stack Tecnológico

| Tecnología | Rol en el Proyecto |
| :--- | :--- |
| **Python** | El cerebro de la aplicación, encargado de toda la lógica del servidor. |
| **Flask** | Micro-framework que gestiona las rutas web y la comunicación con el frontend. |
| **SQLAlchemy** | Permite gestionar la base de datos de forma interactiva y segura desde Python. |
| **HTML5** | El esqueleto de la web, estructura todo el contenido de manera semántica. |
| **CSS3** | Aporta todo el diseño visual, desde los colores hasta las animaciones. |
| **JavaScript** | Añade interactividad en el navegador, especialmente en la gestión del mapa. |
| **Leaflet.js**| Librería especializada en crear los mapas interactivos que visualizan los datos. |
| **Git & GitHub** | Herramientas para el control de versiones y el almacenamiento del código fuente. |

---

## Estructura del Proyecto

```
PROYECTOFINAL/
│
├── static/
│   ├── css/
│   │   ├── estilos.css       # Estilos globales
│   │   ├── acerca.css        # Estilos para página "Acerca de"
│   │   ├── descripcion.css   # Estilos para la galería de tecnologías
│   │   ├── autor.css         # Estilos para la página del autor
│   │   └── formulario.css    # Estilos para el formulario base
│   │
│   ├── js/
│   │   ├── acerca.js         # Lógica del mapa en "Acerca de"
│   │   ├── autor.js          # Lógica del mapa en "Autor"
│   │   └── addpoint.js       # Lógica del mapa interactivo para añadir puntos
│   │
│   └── img/
│       ├── logo.png
│       ├── autor.png
│       └── icons/
│           └── (logos de tecnologías)
│
├── templates/
│   ├── index.html
│   ├── acerca.html
│   ├── descripcion.html
│   ├── autor.html
│   └── addpoint.html
│
├── programa.py             # Archivo principal de la aplicación Flask
└── readme.md               # Este archivo
```

---

## Autor

* **Brayan Camilo Bolivar**
    * Estudiante de Ingeniería Catastral y Geodesia.