# STIGMA Landing Page

Una landing page elegante y moderna para la marca STIGMA, convertida de Next.js a HTML, CSS y JavaScript puro.

## 🎨 Características

-  **Diseño Responsivo**: Se adapta perfectamente a todos los dispositivos
-  **Tema Oscuro**: Diseño elegante con colores oscuros y acentos rosas
-  **Animaciones Suaves**: Transiciones y efectos visuales fluidos
-  **Navegación Suave**: Scroll suave entre secciones
-  **Formulario de Contacto**: Funcionalidad completa de contacto
-  **Galería de Productos**: Muestra dinámica de productos
-  **Archivo Visual**: Sección de campañas y editoriales
-  **Feed de Instagram**: Integración visual con redes sociales

## 📁 Estructura del Proyecto

```
stigma-landing-page/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS completos
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
└── public/             # Carpeta para imágenes (opcional)
    ├── images/
    └── assets/
```

## 🚀 Cómo Usar

### 1. Descarga los Archivos

Descarga todos los archivos (`index.html`, `styles.css`, `script.js`) y colócalos en la misma carpeta.

### 2. Abre el Archivo

Simplemente abre `index.html` en tu navegador web preferido.

### 3. Personalización

-  **Imágenes**: Reemplaza las URLs de placeholder con tus propias imágenes
-  **Colores**: Modifica las variables CSS en `styles.css`
-  **Contenido**: Edita el texto en `index.html`
-  **Funcionalidad**: Personaliza el comportamiento en `script.js`

## 🎨 Personalización

### Cambiar Colores

En `styles.css`, modifica las variables de color:

```css
:root {
   --stigma-black-bg: #1a1a1a;
   --stigma-white-text: #f0f0f0;
   --stigma-pink-accent: #ffb6c1;
   --stigma-dark-gray-border: #333333;
   --stigma-light-gray-detail: #888888;
}
```

### Agregar Productos

En `script.js`, modifica el array `products`:

```javascript
const products = [
   {
      id: 1,
      name: 'TU PRODUCTO',
      description: 'Descripción del producto',
      image: 'ruta/a/tu/imagen.jpg',
      price: '$199.00',
   },
   // ... más productos
];
```

### Cambiar Información de Contacto

En `index.html`, actualiza los enlaces de contacto:

```html
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="https://instagram.com/tu-usuario">@tu_usuario</a>
<a href="https://wa.me/tu-numero">+1 (234) 567-890</a>
```

## 📱 Responsive Design

La página está optimizada para:

-  **Móviles**: 320px - 768px
-  **Tablets**: 768px - 1024px
-  **Desktop**: 1024px+

## 🔧 Funcionalidades JavaScript

### Productos

-  Generación dinámica de tarjetas de productos
-  Efectos hover y animaciones
-  Botones de favoritos y consulta

### Formulario de Contacto

-  Validación de campos
-  Envío simulado (personalizable)
-  Notificaciones de éxito/error

### Navegación

-  Scroll suave entre secciones
-  Header con efecto de transparencia
-  Animaciones de entrada

### Archivo Visual

-  Generación dinámica de elementos
-  Imágenes con overlay informativo
-  Efectos hover

## 🎯 Secciones de la Página

1. **Header**: Navegación principal
2. **Hero**: Sección principal con llamada a la acción
3. **Manifiesto**: Información sobre la marca STIGMA
4. **Catálogo**: Galería de productos
5. **Archivo**: Campañas y editoriales
6. **Contacto**: Formulario e información de contacto
7. **Footer**: Enlaces legales y copyright

## 🛠️ Tecnologías Utilizadas

-  **HTML5**: Estructura semántica
-  **CSS3**: Estilos modernos con Flexbox y Grid
-  **JavaScript ES6+**: Funcionalidad interactiva
-  **Font Awesome**: Iconos
-  **Google Fonts**: Tipografía Monaco

## 📧 Soporte

Para personalizaciones adicionales o soporte técnico, puedes:

1. Modificar el código directamente
2. Agregar nuevas secciones en `index.html`
3. Crear nuevos estilos en `styles.css`
4. Implementar funcionalidades en `script.js`

## 🚀 Despliegue

### Hosting Local

-  Simplemente abre `index.html` en tu navegador
-  Usa un servidor local como Live Server (VS Code)

### Hosting Web

-  Sube todos los archivos a tu servidor web
-  Asegúrate de que las rutas de imágenes sean correctas
-  Configura el dominio en tu proveedor de hosting

### GitHub Pages

1. Crea un repositorio en GitHub
2. Sube los archivos
3. Activa GitHub Pages en la configuración del repositorio

## 📝 Notas Importantes

-  **Imágenes**: Reemplaza las URLs de placeholder con tus propias imágenes
-  **Enlaces**: Actualiza todos los enlaces de redes sociales y contacto
-  **SEO**: Agrega meta tags y optimización SEO según necesites
-  **Analytics**: Integra Google Analytics u otras herramientas de seguimiento

## 🎨 Créditos

Diseño original convertido de Next.js a HTML/CSS/JS puro.
Manteniendo la estética elegante y oscura de la marca STIGMA.

---

**STIGMA** - Desata tu Esencia 🖤
