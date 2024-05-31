# Come Sano, Come Fresco Spa

El Mini Market “Come Sano, Come Fresco Spa” está interesado en el desarrollo de una aplicación web en la que puedan ofrecer y vender sus alimentos de forma online. Esta aplicación está desarrollada utilizando Node.js, Express y Handlebars, y hace uso de Bootstrap y jQuery para el diseño y la interactividad.

## Descripción

Este proyecto es una aplicación web que permite a los usuarios ver y seleccionar productos frescos ofrecidos por el Mini Market. La aplicación utiliza Handlebars para renderizar vistas dinámicas y parciales, facilitando la actualización y mantenimiento del contenido.

### Funcionalidades

1. **Ruta raíz**: Renderiza una vista principal con un listado de productos.
2. **Menú**: Incluye un menú de navegación que es un parcial Handlebars.
3. **Parciales**: Uso de parciales para componentes reutilizables como productos y secciones principales.
4. **Ventana Modal**: Muestra los productos seleccionados por el usuario en una ventana modal.
5. **Interactividad**: Añadir productos al carrito utilizando jQuery y mostrar el carrito en una ventana modal.

## Requisitos

Para ejecutar este proyecto, necesitas tener instalado Node.js y npm. Además, se recomienda utilizar nodemon para el desarrollo.

## Instalación

1. Clona este repositorio en tu máquina local.
   ```sh
   git clone https://github.com/tu-usuario/come-sano-app.git

## Estructura del Proyecto
   ```css
come-sano-app/
   ├── public/
   │   ├── css/
   │   │   └── styles.css
   │   ├── js/
   │   │   └── scripts.js
   │   └── assets/
   │       ├── banana.png
   │       ├── cebollas.png
   │       ├── lechuga.png
   │       ├── papas.png
   │       ├── pimenton.png
   │       └── tomate.png
   ├── views/
        │   ├── layouts/
        │   │   └── main.hbs
        │   ├── partials/
        │   │   ├── menu.hbs
        │   │   ├── dashboard.hbs
        │   │   ├── producto.hbs
        │   │   └── mainSection.hbs
        │   └── index.hbs
        ├── app.js
        ├── package.json
        └── README.md
   ```
### Tecnologías Utilizadas
- Node.js
- Express
- Handlebars
- Bootstrap
- jQuery
