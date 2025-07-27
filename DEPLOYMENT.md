# 🚀 Guía de Deployment - STIGMA Landing Page

## 📋 Preparación del Proyecto

### 1. Limpiar archivos innecesarios

```bash
# Archivos que NO subir (crear .gitignore)
node_modules/
.env
.DS_Store
*.log
```

### 2. Verificar estructura

```
stigma-landing-page/
├── index.html
├── admin.html
├── producto.html
├── styles.css
├── admin.css
├── producto.css
├── script.js
├── admin.js
├── producto.js
├── site-loader.js
├── public/
│   └── images/
├── package.json
├── server.js (solo para Vercel)
├── vercel.json (solo para Vercel)
├── netlify.toml (solo para Netlify)
└── .github/workflows/ (solo para GitHub Pages)
```

## 🌐 Opción 1: Vercel (Recomendado)

### Ventajas:

-  ✅ Gratis
-  ✅ Con backend (API funcional)
-  ✅ URLs limpias (/admin, /producto)
-  ✅ Auto-deploy desde GitHub
-  ✅ SSL automático

### Pasos:

1. **Crear cuenta en Vercel:**

   -  Ve a [vercel.com](https://vercel.com)
   -  Conecta tu cuenta de GitHub

2. **Subir proyecto:**

   ```bash
   # Instalar Vercel CLI
   npm i -g vercel

   # Login
   vercel login

   # Deploy
   vercel
   ```

3. **Configurar dominio:**
   -  Vercel te dará una URL como: `stigma-demo.vercel.app`
   -  Puedes configurar un dominio personalizado

### URLs resultantes:

-  **Sitio:** `https://tu-proyecto.vercel.app`
-  **Admin:** `https://tu-proyecto.vercel.app/admin`
-  **Productos:** `https://tu-proyecto.vercel.app/producto`
-  **API:** `https://tu-proyecto.vercel.app/api/site-data`

---

## 🌐 Opción 2: Netlify (Estático)

### Ventajas:

-  ✅ Gratis
-  ✅ Muy rápido
-  ✅ Fácil de configurar
-  ✅ Formularios incluidos

### Limitaciones:

-  ❌ Sin backend (API no funcionará)
-  ❌ localStorage solo (sin persistencia)

### Pasos:

1. **Crear cuenta en Netlify:**

   -  Ve a [netlify.com](https://netlify.com)
   -  Conecta tu cuenta de GitHub

2. **Deploy automático:**

   -  Arrastra la carpeta del proyecto a Netlify
   -  O conecta tu repositorio de GitHub

3. **Configurar redirects:**
   -  Netlify usará el archivo `netlify.toml` automáticamente

### URLs resultantes:

-  **Sitio:** `https://tu-proyecto.netlify.app`
-  **Admin:** `https://tu-proyecto.netlify.app/admin`
-  **Productos:** `https://tu-proyecto.netlify.app/producto`

---

## 🌐 Opción 3: GitHub Pages

### Ventajas:

-  ✅ Gratis
-  ✅ Integrado con GitHub
-  ✅ Fácil de mantener

### Limitaciones:

-  ❌ Sin backend
-  ❌ Solo archivos estáticos

### Pasos:

1. **Crear repositorio en GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/stigma-demo.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages:**

   -  Ve a Settings > Pages
   -  Source: Deploy from a branch
   -  Branch: gh-pages
   -  Folder: / (root)

3. **El workflow automático se encargará del deploy**

### URLs resultantes:

-  **Sitio:** `https://tu-usuario.github.io/stigma-demo`
-  **Admin:** `https://tu-usuario.github.io/stigma-demo/admin`
-  **Productos:** `https://tu-usuario.github.io/stigma-demo/producto`

---

## 🔧 Configuración Específica por Plataforma

### Para Vercel (Backend completo):

```bash
# Mantener todos los archivos
# El servidor.js funcionará
# Las APIs estarán disponibles
```

### Para Netlify/GitHub Pages (Solo frontend):

```bash
# Remover archivos de backend
rm server.js
rm package.json
rm package-lock.json
rm node_modules/ -rf

# Modificar site-loader.js para usar solo localStorage
# Las APIs no funcionarán, pero el admin sí
```

---

## 📱 Demo Links

### Vercel Demo:

-  **Sitio:** https://stigma-demo.vercel.app
-  **Admin:** https://stigma-demo.vercel.app/admin
-  **Credenciales:** admin / stigma2025

### Netlify Demo:

-  **Sitio:** https://stigma-demo.netlify.app
-  **Admin:** https://stigma-demo.netlify.app/admin
-  **Credenciales:** admin / stigma2025

---

## 🎯 Recomendación Final

**Para una demo completa: Vercel**

-  Backend funcional
-  APIs disponibles
-  URLs limpias
-  Gratis y confiable

**Para demo rápida: Netlify**

-  Más rápido de configurar
-  Perfecto para mostrar el frontend
-  Formularios incluidos

---

## 🚨 Notas Importantes

1. **Credenciales del Admin:**

   -  Usuario: `admin`
   -  Contraseña: `stigma2025`
   -  Cambiar en producción

2. **Imágenes:**

   -  Asegúrate de que todas las imágenes estén en `/public/images/`
   -  Verifica que las rutas sean correctas

3. **Dominio personalizado:**

   -  Puedes configurar tu propio dominio en cualquier plataforma
   -  SSL será automático

4. **Backup:**
   -  Los datos del admin se guardan en localStorage
   -  Para persistencia real, necesitarías una base de datos

---

**¿Cuál opción prefieres? Te ayudo a configurar la que elijas!** 🚀
