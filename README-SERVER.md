# STIGMA - Servidor Local

## 🚀 Instalación y Configuración

### Prerrequisitos

-  Node.js (versión 14 o superior)
-  npm (incluido con Node.js)

### Pasos de Instalación

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Iniciar el servidor:**

   ```bash
   npm start
   ```

3. **Para desarrollo (con auto-reload):**
   ```bash
   npm run dev
   ```

## 🌐 URLs Disponibles

Una vez iniciado el servidor, podrás acceder a:

-  **🏠 Sitio Principal:** http://localhost:3000
-  **🔧 Panel Admin:** http://localhost:3000/admin
-  **📦 Página de Productos:** http://localhost:3000/producto
-  **📊 API:** http://localhost:3000/api/site-data

## 🔐 Credenciales del Panel Admin

-  **Usuario:** `admin`
-  **Contraseña:** `stigma2025`

## 📁 Estructura del Proyecto

```
stigma-landing-page/
├── server.js              # Servidor Express
├── package.json           # Dependencias
├── index.html             # Sitio principal
├── admin.html             # Panel de administración
├── producto.html          # Página de productos
├── site-loader.js         # Cargador dinámico
├── admin.js               # Funcionalidad del admin
├── script.js              # Funcionalidad del sitio
├── styles.css             # Estilos principales
├── admin.css              # Estilos del admin
├── producto.css           # Estilos de productos
├── producto.js            # Funcionalidad de productos
└── public/                # Archivos estáticos
    └── images/            # Imágenes del sitio
```

## 🔄 Funcionalidades

### Panel de Administración

-  ✅ Gestión de contenido por secciones
-  ✅ Upload de imágenes
-  ✅ Gestión de productos (CRUD)
-  ✅ Sincronización automática con el sitio principal
-  ✅ Exportación de datos en JSON

### Sitio Principal

-  ✅ Carga dinámica de datos del admin
-  ✅ Diseño responsive
-  ✅ Animaciones y efectos visuales
-  ✅ Formulario de contacto funcional

### API REST

-  ✅ `/api/site-data` - Información general
-  ✅ `/api/content` - Datos de contenido
-  ✅ `/api/products` - Lista de productos

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start

# Modo desarrollo (auto-reload)
npm run dev

# Verificar versión de Node.js
node --version

# Verificar versión de npm
npm --version
```

## 🔧 Configuración Avanzada

### Cambiar Puerto

Edita el archivo `server.js` y modifica la línea:

```javascript
const PORT = 3000; // Cambia por el puerto que prefieras
```

### Variables de Entorno

Crea un archivo `.env` para configuraciones:

```env
PORT=3000
NODE_ENV=development
```

## 🚨 Solución de Problemas

### Error: "Port already in use"

```bash
# Encuentra el proceso que usa el puerto
netstat -ano | findstr :3000

# Mata el proceso (reemplaza PID con el número del proceso)
taskkill /PID <PID> /F
```

### Error: "Module not found"

```bash
# Reinstala las dependencias
rm -rf node_modules
npm install
```

### Error: "Permission denied"

```bash
# En Windows, ejecuta PowerShell como administrador
# En Mac/Linux, usa sudo
sudo npm start
```

## 📞 Soporte

Para problemas técnicos o consultas:

-  Revisa la consola del navegador (F12)
-  Verifica los logs del servidor
-  Asegúrate de que todas las dependencias estén instaladas

## 🎯 Próximos Pasos

1. **Base de Datos:** Integrar MongoDB o MySQL
2. **Autenticación:** Sistema de usuarios avanzado
3. **Upload de Archivos:** Almacenamiento en la nube
4. **Backup Automático:** Sistema de respaldo
5. **Analytics:** Integración con Google Analytics

---

**STIGMA** - Desata tu Esencia 🖤
