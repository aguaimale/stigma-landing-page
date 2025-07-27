// STIGMA Site Loader - Carga dinámica de datos del panel de administración

class StigmaSiteLoader {
   constructor() {
      this.contentData = null;
      this.productsData = [];
      this.isDataLoaded = false;
   }

   // Inicializar el cargador
   async init() {
      await this.loadData();
      if (this.isDataLoaded) {
         this.updateSiteContent();
      }
   }

   // Cargar datos desde localStorage o archivo JSON
   async loadData() {
      try {
         // Intentar cargar desde localStorage (datos del admin)
         const contentData = localStorage.getItem('stigmaContentData');
         const productsData = localStorage.getItem('stigmaProductsData');

         if (contentData && productsData) {
            this.contentData = JSON.parse(contentData);
            this.productsData = JSON.parse(productsData);
            this.isDataLoaded = true;
            console.log('Datos cargados desde localStorage (Admin Panel)');
            return;
         }

         // Si no hay datos en localStorage, intentar cargar desde archivo JSON
         const response = await fetch('./stigma-site-data.json');
         if (response.ok) {
            const siteData = await response.json();
            this.contentData = siteData.content;
            this.productsData = siteData.products;
            this.isDataLoaded = true;
            console.log('Datos cargados desde archivo JSON');
            return;
         }

         // Si no hay datos externos, usar datos por defecto
         this.loadDefaultData();
         console.log('Usando datos por defecto');
      } catch (error) {
         console.error('Error cargando datos:', error);
         this.loadDefaultData();
      }
   }

   // Cargar datos por defecto
   loadDefaultData() {
      this.contentData = {
         hero: {
            badgeText: 'NUEVA COLECCIÓN',
            badgeYear: '2025',
            title: 'STIGMA COLLECTION',
            tagline: 'DESATA TU ESENCIA',
            statementTitle: 'REBELDÍA SIN LÍMITES',
            statementText:
               'Rompe las reglas. Define tu estilo. Piezas únicas para almas audaces que se atreven a ser diferentes. Cada accesorio es una declaración de guerra contra la mediocridad.',
            backgroundImage: './public/images/bg-hero.JPG',
         },
         manifiesto: {
            title: 'NUESTRO MANIFIESTO',
            subtitle: 'LA FILOSOFÍA DETRÁS DE STIGMA',
            description:
               'STIGMA nace de la rebeldía, de la necesidad de romper con lo establecido y crear algo verdaderamente único. Cada pieza es una declaración de guerra contra la mediocridad, una celebración de la individualidad y la audacia.',
            image: './public/images/img-manifiesto.JPG',
         },
         catalogo: {
            title: 'NUESTRO CATÁLOGO',
            subtitle: 'PIEZAS ÚNICAS PARA ALMAS AUDACES',
            description:
               'Descubre nuestra colección de accesorios únicos. Cada pieza está diseñada para aquellos que se atreven a ser diferentes, para quienes buscan expresar su individualidad a través de la moda.',
         },
         archivo: {
            title: 'ARCHIVO VISUAL',
            subtitle: 'CAMPAÑAS Y EDITORIALES',
            description:
               'Explora nuestras campañas más icónicas y editoriales que han definido la estética de STIGMA. Cada imagen cuenta una historia de rebeldía y autenticidad.',
            images: [
               './public/images/bg-archivo.JPG',
               './public/images/DSCF1488.JPG',
            ],
         },
         contacto: {
            title: 'CONTÁCTANOS',
            subtitle: 'CONECTA CON STIGMA',
            email: 'info@stigma.com',
            instagram: '@stigma_official',
            whatsapp: '+1 (234) 567-890',
            description:
               '¿Tienes preguntas sobre nuestros productos? ¿Quieres colaborar con STIGMA? No dudes en contactarnos. Estamos aquí para ayudarte a encontrar tu estilo único.',
         },
      };

      this.productsData = [
         {
            id: 1,
            name: 'PIEZA ÚNICA',
            description:
               'Colección Limitada. Materiales premium con acabados meticulosos.',
            image: './public/images/productos/product1.png',
            price: '$299.00',
         },
         {
            id: 2,
            name: 'PIEZA REBELDE',
            description:
               'Diseño audaz. Para quienes se atreven a ser diferentes.',
            image: './public/images/productos/product2.png',
            price: '$349.00',
         },
         {
            id: 3,
            name: 'PIEZA OSCURA',
            description:
               'Inspirada en la naturaleza indómita. Declaración de autenticidad.',
            image: './public/images/productos/product3.png',
            price: '$399.00',
         },
         {
            id: 4,
            name: 'PIEZA LEGENDARIA',
            description:
               'Esencia de la rebeldía. Complementa y define tu estilo.',
            image: './public/images/productos/product4.png',
            price: '$449.00',
         },
      ];

      this.isDataLoaded = true;
   }

   // Actualizar contenido del sitio
   updateSiteContent() {
      this.updateHeroSection();
      this.updateManifiestoSection();
      this.updateCatalogoSection();
      this.updateArchivoSection();
      this.updateContactoSection();
      this.updateProducts();
   }

   // Actualizar sección Hero
   updateHeroSection() {
      if (!this.contentData.hero) return;

      const hero = this.contentData.hero;

      // Badge
      const badgeText = document.getElementById('heroBadgeText');
      const badgeYear = document.getElementById('heroBadgeYear');
      if (badgeText) badgeText.textContent = hero.badgeText;
      if (badgeYear) badgeYear.textContent = hero.badgeYear;

      // Título y tagline
      const heroTitle = document.getElementById('heroTitle');
      const heroTagline = document.getElementById('heroTagline');
      if (heroTitle) {
         heroTitle.innerHTML = `${
            hero.title.split(' ')[0]
         } <span class="accent">${hero.title
            .split(' ')
            .slice(1)
            .join(' ')}</span>`;
      }
      if (heroTagline) {
         heroTagline.innerHTML = `${hero.tagline
            .split(' ')
            .slice(0, 2)
            .join(' ')} <span class="accent">${hero.tagline
            .split(' ')
            .slice(2)
            .join(' ')}</span>`;
      }

      // Statement
      const statementTitle = document.getElementById('heroStatementTitle');
      const statementText = document.getElementById('heroStatementText');
      if (statementTitle)
         statementTitle.textContent = `"${hero.statementTitle}"`;
      if (statementText) statementText.textContent = hero.statementText;

      // Imagen de fondo
      const heroBg = document.getElementById('heroMainImage');
      if (heroBg && hero.backgroundImage) {
         heroBg.src = hero.backgroundImage;
      }
   }

   // Actualizar sección Manifiesto
   updateManifiestoSection() {
      if (!this.contentData.manifiesto) return;

      const manifiesto = this.contentData.manifiesto;

      const title = document.getElementById('manifiestoTitle');
      const subtitle = document.getElementById('manifiestoSubtitle');
      const image = document.getElementById('manifiestoImage');

      if (title) {
         title.innerHTML = `<span class="accent">MANIFIESTO</span> STIGMA`;
      }
      if (subtitle) subtitle.textContent = manifiesto.subtitle;
      if (image && manifiesto.image) image.src = manifiesto.image;
   }

   // Actualizar sección Catálogo
   updateCatalogoSection() {
      if (!this.contentData.catalogo) return;

      const catalogo = this.contentData.catalogo;

      const title = document.getElementById('catalogoTitle');
      const subtitle = document.getElementById('catalogoSubtitle');

      if (title) {
         title.innerHTML = `<span class="accent">COLECCIÓN</span> STIGMA 2025`;
      }
      if (subtitle) subtitle.textContent = catalogo.subtitle;
   }

   // Actualizar sección Archivo
   updateArchivoSection() {
      if (!this.contentData.archivo) return;

      const archivo = this.contentData.archivo;

      const title = document.getElementById('archivoTitle');
      const subtitle = document.getElementById('archivoSubtitle');

      if (title) {
         title.innerHTML = `<span class="accent">ARCHIVO</span> VISUAL`;
      }
      if (subtitle) subtitle.textContent = archivo.subtitle;

      // Actualizar imágenes del archivo
      this.updateArchivoImages(archivo.images);
   }

   // Actualizar imágenes del archivo
   updateArchivoImages(images) {
      if (!images || !Array.isArray(images)) return;

      const archiveGrid = document.querySelector('.archive-grid');
      if (!archiveGrid) return;

      // Limpiar grid existente
      archiveGrid.innerHTML = '';

      // Agregar nuevas imágenes
      images.forEach((imageSrc, index) => {
         const archiveItem = document.createElement('div');
         archiveItem.className = 'campaign-card';
         archiveItem.innerHTML = `
                <img src="${imageSrc}" alt="Archivo ${
            index + 1
         }" class="campaign-img">
                <div class="campaign-overlay">
                    <div class="campaign-info">
                        <h4 class="campaign-name">Campaña ${index + 1}</h4>
                        <p class="campaign-category">Editorial STIGMA</p>
                        <span class="campaign-year">2024</span>
                    </div>
                </div>
            `;
         archiveGrid.appendChild(archiveItem);
      });
   }

   // Actualizar sección Contacto
   updateContactoSection() {
      if (!this.contentData.contacto) return;

      const contacto = this.contentData.contacto;

      const title = document.getElementById('contactoTitle');
      const subtitle = document.getElementById('contactoSubtitle');
      const email = document.getElementById('contactoEmail');
      const instagram = document.getElementById('contactoInstagram');
      const whatsapp = document.getElementById('contactoWhatsapp');

      if (title) {
         title.innerHTML = `<span class="accent">CONECTA</span> CON STIGMA`;
      }
      if (subtitle) subtitle.textContent = contacto.subtitle;
      if (email) email.textContent = contacto.email;
      if (instagram) instagram.textContent = contacto.instagram;
      if (whatsapp) whatsapp.textContent = contacto.whatsapp;
   }

   // Actualizar productos
   updateProducts() {
      if (!this.productsData || this.productsData.length === 0) return;

      const productsGrid = document.getElementById('productsGrid');
      if (!productsGrid) return;

      // Limpiar grid existente
      productsGrid.innerHTML = '';

      // Agregar nuevos productos
      this.productsData.forEach((product, index) => {
         const productCard = this.createProductCard(product, index);
         productsGrid.appendChild(productCard);
      });
   }

   // Crear tarjeta de producto
   createProductCard(product, index) {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.transform = `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)`;

      card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" style="border-radius: 12px;">
            <div class="product-overlay">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <button class="product-action-btn" onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="product-action-btn primary" onclick="consultProduct(${product.id})">
                        Consultar Pieza
                    </button>
                </div>
            </div>
        `;

      return card;
   }

   // Obtener datos actuales
   getCurrentData() {
      return {
         content: this.contentData,
         products: this.productsData,
         lastUpdated: new Date().toISOString(),
      };
   }

   // Verificar si hay datos del admin
   hasAdminData() {
      return localStorage.getItem('stigmaContentData') !== null;
   }

   // Recargar datos
   async reload() {
      await this.loadData();
      if (this.isDataLoaded) {
         this.updateSiteContent();
      }
   }
}

// Inicializar el cargador cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
   window.stigmaLoader = new StigmaSiteLoader();
   window.stigmaLoader.init();
});

// Función global para recargar datos (útil para debugging)
window.reloadStigmaData = function () {
   if (window.stigmaLoader) {
      window.stigmaLoader.reload();
   }
};
