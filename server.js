const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Ruta principal - index.html
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta del panel de administración
app.get('/admin', (req, res) => {
   res.sendFile(path.join(__dirname, 'admin.html'));
});

// Ruta de productos
app.get('/producto', (req, res) => {
   res.sendFile(path.join(__dirname, 'producto.html'));
});

// API para obtener datos del sitio
app.get('/api/site-data', (req, res) => {
   res.json({
      message: 'STIGMA Site API',
      version: '1.0.0',
      endpoints: {
         content: '/api/content',
         products: '/api/products',
      },
   });
});

// API para obtener contenido
app.get('/api/content', (req, res) => {
   // Aquí podrías conectar con una base de datos real
   res.json({
      hero: {
         badgeText: 'NUEVA COLECCIÓN',
         badgeYear: '2025',
         title: 'STIGMA COLLECTION',
         tagline: 'DESATA TU ESENCIA',
         statementTitle: 'REBELDÍA SIN LÍMITES',
         statementText:
            'Rompe las reglas. Define tu estilo. Piezas únicas para almas audaces que se atreven a ser diferentes.',
         backgroundImage: '/public/images/bg-hero.JPG',
      },
      manifiesto: {
         title: 'NUESTRO MANIFIESTO',
         subtitle: 'LA FILOSOFÍA DETRÁS DE STIGMA',
         description:
            'STIGMA nace de la rebeldía, de la necesidad de romper con lo establecido.',
         image: '/public/images/img-manifiesto.JPG',
      },
      catalogo: {
         title: 'NUESTRO CATÁLOGO',
         subtitle: 'PIEZAS ÚNICAS PARA ALMAS AUDACES',
         description: 'Descubre nuestra colección de accesorios únicos.',
      },
      archivo: {
         title: 'ARCHIVO VISUAL',
         subtitle: 'CAMPAÑAS Y EDITORIALES',
         description: 'Explora nuestras campañas más icónicas.',
         images: [
            '/public/images/bg-archivo.JPG',
            '/public/images/DSCF1488.JPG',
         ],
      },
      contacto: {
         title: 'CONTÁCTANOS',
         subtitle: 'CONECTA CON STIGMA',
         email: 'info@stigma.com',
         instagram: '@stigma_official',
         whatsapp: '+1 (234) 567-890',
         description: '¿Tienes preguntas sobre nuestros productos?',
      },
   });
});

// API para obtener productos
app.get('/api/products', (req, res) => {
   res.json([
      {
         id: 1,
         name: 'PIEZA ÚNICA',
         description:
            'Colección Limitada. Materiales premium con acabados meticulosos.',
         image: '/public/images/productos/product1.png',
         price: '$299.00',
      },
      {
         id: 2,
         name: 'PIEZA REBELDE',
         description: 'Diseño audaz. Para quienes se atreven a ser diferentes.',
         image: '/public/images/productos/product2.png',
         price: '$349.00',
      },
      {
         id: 3,
         name: 'PIEZA OSCURA',
         description:
            'Inspirada en la naturaleza indómita. Declaración de autenticidad.',
         image: '/public/images/productos/product3.png',
         price: '$399.00',
      },
      {
         id: 4,
         name: 'PIEZA LEGENDARIA',
         description: 'Esencia de la rebeldía. Complementa y define tu estilo.',
         image: '/public/images/productos/product4.png',
         price: '$449.00',
      },
   ]);
});

// Manejar rutas no encontradas
app.get('*', (req, res) => {
   res.status(404).send(`
        <html>
            <head>
                <title>STIGMA - Página no encontrada</title>
                <style>
                    body { 
                        font-family: 'Monaco', monospace; 
                        background: #1a1a1a; 
                        color: #f0f0f0; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        height: 100vh; 
                        margin: 0; 
                    }
                    .error-container { text-align: center; }
                    .error-code { font-size: 4rem; color: #ffb6c1; margin: 0; }
                    .error-message { font-size: 1.2rem; margin: 1rem 0; }
                    .error-links { margin-top: 2rem; }
                    .error-links a { 
                        color: #ffb6c1; 
                        text-decoration: none; 
                        margin: 0 1rem; 
                        padding: 0.5rem 1rem; 
                        border: 2px solid #ffb6c1; 
                        border-radius: 8px; 
                    }
                    .error-links a:hover { 
                        background: #ffb6c1; 
                        color: #1a1a1a; 
                    }
                </style>
            </head>
            <body>
                <div class="error-container">
                    <h1 class="error-code">404</h1>
                    <p class="error-message">Página no encontrada</p>
                    <p>La página que buscas no existe en STIGMA</p>
                    <div class="error-links">
                        <a href="/">Inicio</a>
                        <a href="/admin">Admin</a>
                    </div>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
   console.log(`🚀 STIGMA Server running on http://localhost:${PORT}`);
   console.log(`📱 Sitio principal: http://localhost:${PORT}`);
   console.log(`🔧 Panel admin: http://localhost:${PORT}/admin`);
   console.log(`📦 Productos: http://localhost:${PORT}/producto`);
   console.log(`📊 API: http://localhost:${PORT}/api/site-data`);
});
