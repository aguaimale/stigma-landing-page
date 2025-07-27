# Carpeta de Imágenes de Productos

Esta carpeta contiene todas las imágenes de los productos de STIGMA.

## Estructura de Archivos

### Convención de Nombres

Para cada producto, usa la siguiente estructura de nombres:

```
producto-{ID}-{TIPO}.{EXTENSION}
```

### Tipos de Imágenes

#### Producto Principal (ID: 1)

-  **Imagen Principal**: `producto-1-principal.jpg`
-  **Imagen Secundaria**: `producto-1-secundaria.jpg`
-  **Miniatura 1**: `producto-1-mini-1.jpg`
-  **Miniatura 2**: `producto-1-mini-2.jpg`

#### Productos Relacionados

-  **Producto 2**: `producto-2.jpg`
-  **Producto 3**: `producto-3.jpg`
-  **Producto 4**: `producto-4.jpg`
-  **Producto 5**: `producto-5.jpg`

## Especificaciones de Imágenes

### Imágenes Principales

-  **Resolución**: 600x600px (mínimo)
-  **Formato**: JPG o PNG
-  **Calidad**: Alta (optimizada para web)
-  **Fondo**: Preferiblemente transparente o fondo oscuro

### Miniaturas

-  **Resolución**: 150x150px
-  **Formato**: JPG o PNG
-  **Calidad**: Media (optimizada para carga rápida)

### Productos Relacionados

-  **Resolución**: 400x400px
-  **Formato**: JPG o PNG
-  **Calidad**: Media

## Ejemplo de Estructura Completa

```
productos/
├── producto-1-principal.jpg
├── producto-1-secundaria.jpg
├── producto-1-mini-1.jpg
├── producto-1-mini-2.jpg
├── producto-2.jpg
├── producto-3.jpg
├── producto-4.jpg
├── producto-5.jpg
└── README.md
```

## Optimización

### Antes de Subir

1. **Comprimir**: Usar herramientas como TinyPNG o ImageOptim
2. **Redimensionar**: Asegurar que las dimensiones sean correctas
3. **Formato**: Preferir JPG para fotos, PNG para gráficos con transparencia
4. **Peso**: Mantener archivos bajo 500KB para carga rápida

### Herramientas Recomendadas

-  **Compresión**: TinyPNG, ImageOptim, Squoosh
-  **Redimensionado**: Photoshop, GIMP, Canva
-  **Optimización**: WebP converter (opcional)

## Integración con el Código

Las rutas en el código están configuradas para usar esta estructura:

```javascript
// En producto.js
images: [
   './public/images/productos/producto-1-principal.jpg',
   './public/images/productos/producto-1-secundaria.jpg'
],
galleryImages: [
   './public/images/productos/producto-1-mini-1.jpg',
   './public/images/productos/producto-1-mini-2.jpg'
]
```

## Notas Importantes

-  ✅ Mantener consistencia en los nombres de archivos
-  ✅ Usar solo letras minúsculas y guiones
-  ✅ No usar espacios ni caracteres especiales
-  ✅ Verificar que las imágenes se carguen correctamente
-  ✅ Optimizar para diferentes dispositivos

## Próximos Productos

Para agregar más productos, seguir la misma convención:

-  Producto 6: `producto-6-principal.jpg`, `producto-6-mini-1.jpg`, etc.
-  Producto 7: `producto-7-principal.jpg`, `producto-7-mini-1.jpg`, etc.
