# Página de Productos - STIGMA

## Descripción

Se ha creado una nueva página de productos (`producto.html`) que permite visualizar el detalle completo de cada pieza de la colección STIGMA. Esta página se accede desde el botón "Consultar Pieza" en la sección de catálogo de la página principal.

## Características

### 🖼️ Galería de Imágenes

-  **Imagen Principal**: Muestra la imagen destacada del producto
-  **Galería Secundaria**: Dos imágenes adicionales que se pueden seleccionar
-  **Interactividad**: Click en las imágenes pequeñas para cambiar la imagen principal
-  **Animaciones**: Transiciones suaves al cambiar imágenes

### 📝 Información del Producto

-  **Título y Subtítulo**: Nombre del producto y colección
-  **Precio**: Destacado con el color característico de STIGMA
-  **Descripción Detallada**: Texto descriptivo del producto
-  **Especificaciones Técnicas**: Material, acabado, tamaño, peso

### 🛒 Funcionalidades de Compra

-  **Agregar al Carrito**: Botón principal para compra
-  **Agregar a Favoritos**: Botón secundario para wishlist
-  **Información de Envío**: Detalles de envío gratuito y devoluciones

### 🔗 Productos Relacionados

-  **Grid de Productos**: Muestra 4 productos relacionados
-  **Navegación**: Click en productos relacionados para ver detalles
-  **Hover Effects**: Animaciones al pasar el mouse

## Archivos Creados

### `producto.html`

-  Página principal de productos
-  Estructura HTML con todas las secciones
-  Navegación integrada con la página principal

### `producto.css`

-  Estilos específicos para la página de productos
-  Diseño responsive (móvil, tablet, desktop)
-  Animaciones y efectos hover
-  Consistencia visual con el resto del sitio

### `producto.js`

-  Funcionalidad JavaScript completa
-  Gestión de galería de imágenes
-  Carga dinámica de datos del producto
-  Sistema de notificaciones
-  Animaciones de scroll

## Cómo Usar

### Acceso a la Página

1. Ir a la página principal (`index.html`)
2. Navegar a la sección "Catálogo"
3. Hacer click en "Consultar Pieza" en cualquier producto
4. Serás redirigido a `producto.html?id=X` donde X es el ID del producto

### Navegación

-  **Header**: Enlaces de vuelta a la página principal
-  **Footer**: Información de contacto y enlaces legales
-  **Productos Relacionados**: Click para ver otros productos

### Funcionalidades Interactivas

-  **Galería**: Click en imágenes pequeñas para cambiar la principal
-  **Botones**: Agregar al carrito y favoritos con notificaciones
-  **Hover Effects**: Animaciones en botones y tarjetas

## Personalización

### Cambiar Datos del Producto

Editar el objeto `productData` en `producto.js`:

```javascript
const productData = {
   id: 1,
   name: 'NOMBRE DEL PRODUCTO',
   price: '$XXX.XX',
   description: 'Descripción del producto...',
   images: ['url-imagen-1', 'url-imagen-2'],
   // ... más propiedades
};
```

### Agregar Más Imágenes

Modificar los arrays `images` y `galleryImages` en `productData`:

```javascript
images: [
   'url-imagen-principal-1',
   'url-imagen-principal-2',
   'url-imagen-principal-3'
],
galleryImages: [
   'url-miniatura-1',
   'url-miniatura-2',
   'url-miniatura-3'
]
```

### Productos Relacionados

Editar el array `relatedProducts` en `producto.js`:

```javascript
const relatedProducts = [
   {
      id: 2,
      name: 'PIEZA 2',
      price: '$199.00',
      image: 'url-imagen-relacionada',
   },
   // ... más productos
];
```

## Integración con Backend

### Carga Dinámica de Datos

La página está preparada para integrar con una API:

```javascript
// En initializeProductData()
const productId = urlParams.get('id') || 1;
// fetch(`/api/products/${productId}`)
//   .then(response => response.json())
//   .then(product => loadProductData(product));
```

### Funciones de Carrito

Implementar las funciones `addToCart()` y `addToWishlist()`:

```javascript
function addToCart() {
   // Llamada a API para agregar al carrito
   fetch('/api/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId: productData.id }),
   });
}
```

## Responsive Design

### Breakpoints

-  **Móvil**: < 768px
-  **Tablet**: 768px - 1024px
-  **Desktop**: > 1024px

### Adaptaciones

-  **Galería**: Imágenes más pequeñas en móvil
-  **Layout**: Grid de 1 columna en móvil, 2 en desktop
-  **Texto**: Tamaños adaptativos según pantalla

## Estilo Visual

### Consistencia

-  **Colores**: Mismo esquema que la página principal
-  **Tipografía**: Fuente Monaco en todo el sitio
-  **Bordes**: Bordes en lugar de sombras (siguiendo las reglas del proyecto)
-  **Animaciones**: Transiciones suaves y efectos hover

### Elementos Destacados

-  **Precio**: Color rosa característico (#ffb6c1)
-  **Botones**: Estilo consistente con la página principal
-  **Imágenes**: Bordes redondeados y efectos hover

## Próximos Pasos

1. **Integración con Backend**: Conectar con API real
2. **Sistema de Carrito**: Implementar funcionalidad completa
3. **Filtros de Productos**: Agregar búsqueda y filtros
4. **Reviews**: Sistema de reseñas de clientes
5. **Zoom de Imágenes**: Funcionalidad de zoom en imágenes
6. **Videos**: Agregar videos de productos

## Notas Técnicas

-  **Vanilla JavaScript**: Sin dependencias externas
-  **CSS Grid/Flexbox**: Layout moderno y responsive
-  **Intersection Observer**: Animaciones de scroll optimizadas
-  **URL Parameters**: Soporte para múltiples productos
-  **Accessibility**: Estructura semántica HTML
