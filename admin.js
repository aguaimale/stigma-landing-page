// Configuración del panel de administración
const ADMIN_CONFIG = {
   username: 'admin',
   password: 'stigma2025',
   sessionTimeout: 3600000, // 1 hora
};

// Estado global de la aplicación
let currentUser = null;
let sessionTimer = null;
let contentData = {};
let productsData = [];

// Elementos del DOM
const loginScreen = document.getElementById('loginScreen');
const adminPanel = document.getElementById('adminPanel');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const navBtns = document.querySelectorAll('.nav-btn');
const sectionEditors = document.querySelectorAll('.section-editor');
const saveAllBtn = document.getElementById('saveAllBtn');
const productModal = document.getElementById('productModal');
const productForm = document.getElementById('productForm');

// Inicialización
document.addEventListener('DOMContentLoaded', function () {
   initializeAdmin();
   loadContentData();
   loadProductsData();
   setupEventListeners();
});

// Inicialización del panel
function initializeAdmin() {
   // Verificar si hay una sesión activa
   const session = localStorage.getItem('adminSession');
   if (session) {
      const sessionData = JSON.parse(session);
      if (Date.now() - sessionData.timestamp < ADMIN_CONFIG.sessionTimeout) {
         currentUser = sessionData.user;
         showAdminPanel();
         startSessionTimer();
      } else {
         localStorage.removeItem('adminSession');
      }
   }
}

// Configuración de event listeners
function setupEventListeners() {
   // Login
   loginForm.addEventListener('submit', handleLogin);

   // Logout
   logoutBtn.addEventListener('click', handleLogout);

   // Navegación
   navBtns.forEach((btn) => {
      btn.addEventListener('click', () => switchSection(btn.dataset.section));
   });

   // Guardar cambios
   saveAllBtn.addEventListener('click', saveAllChanges);

   // Probar sincronización
   const testSyncBtn = document.getElementById('testSyncBtn');
   if (testSyncBtn) {
      testSyncBtn.addEventListener('click', testSynchronization);
   }

   // Upload de imágenes
   setupImageUploads();

   // Productos
   setupProductManagement();

   // Modal
   setupModal();
}

// Manejo de login
function handleLogin(e) {
   e.preventDefault();

   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (
      username === ADMIN_CONFIG.username &&
      password === ADMIN_CONFIG.password
   ) {
      currentUser = username;
      const sessionData = {
         user: username,
         timestamp: Date.now(),
      };
      localStorage.setItem('adminSession', JSON.stringify(sessionData));
      showAdminPanel();
      startSessionTimer();
   } else {
      showNotification('Credenciales incorrectas', 'error');
   }
}

// Manejo de logout
function handleLogout() {
   currentUser = null;
   localStorage.removeItem('adminSession');
   if (sessionTimer) {
      clearTimeout(sessionTimer);
   }
   showLoginScreen();
}

// Mostrar panel de administración
function showAdminPanel() {
   loginScreen.classList.add('hidden');
   adminPanel.classList.remove('hidden');
   loadCurrentContent();
}

// Mostrar pantalla de login
function showLoginScreen() {
   adminPanel.classList.add('hidden');
   loginScreen.classList.remove('hidden');
   loginForm.reset();
}

// Timer de sesión
function startSessionTimer() {
   if (sessionTimer) {
      clearTimeout(sessionTimer);
   }

   sessionTimer = setTimeout(() => {
      showNotification('Sesión expirada', 'warning');
      handleLogout();
   }, ADMIN_CONFIG.sessionTimeout);
}

// Cambiar sección
function switchSection(sectionName) {
   // Actualizar navegación
   navBtns.forEach((btn) => {
      btn.classList.remove('active');
      if (btn.dataset.section === sectionName) {
         btn.classList.add('active');
      }
   });

   // Mostrar sección correspondiente
   sectionEditors.forEach((editor) => {
      editor.classList.remove('active');
      if (editor.id === sectionName + 'Section') {
         editor.classList.add('active');
      }
   });
}

// Cargar datos de contenido
function loadContentData() {
   // En una implementación real, esto vendría de una API
   contentData = {
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
}

// Cargar datos de productos
function loadProductsData() {
   // En una implementación real, esto vendría de una API
   productsData = [
      {
         id: 1,
         name: 'PIEZA ÚNICA',
         price: '$199.00',
         description:
            'Accesorio único diseñado para almas audaces que buscan expresar su individualidad.',
         images: [
            './public/images/productos/product1.png',
            './public/images/productos/product1detail.png',
         ],
      },
      {
         id: 2,
         name: 'PIEZA REBELDE',
         price: '$249.00',
         description:
            'Pieza que desafía las convenciones y celebra la rebeldía interior.',
         images: [
            './public/images/productos/product2.png',
            './public/images/productos/product2detail.png',
         ],
      },
   ];
}

// Cargar contenido actual en los formularios
function loadCurrentContent() {
   // Hero Section
   document.getElementById('heroBadgeText').value = contentData.hero.badgeText;
   document.getElementById('heroBadgeYear').value = contentData.hero.badgeYear;
   document.getElementById('heroTitle').value = contentData.hero.title;
   document.getElementById('heroTagline').value = contentData.hero.tagline;
   document.getElementById('heroStatementTitle').value =
      contentData.hero.statementTitle;
   document.getElementById('heroStatementText').value =
      contentData.hero.statementText;

   // Manifiesto Section
   document.getElementById('manifiestoTitle').value =
      contentData.manifiesto.title;
   document.getElementById('manifiestoSubtitle').value =
      contentData.manifiesto.subtitle;
   document.getElementById('manifiestoDescription').value =
      contentData.manifiesto.description;

   // Catálogo Section
   document.getElementById('catalogoTitle').value = contentData.catalogo.title;
   document.getElementById('catalogoSubtitle').value =
      contentData.catalogo.subtitle;
   document.getElementById('catalogoDescription').value =
      contentData.catalogo.description;

   // Archivo Section
   document.getElementById('archivoTitle').value = contentData.archivo.title;
   document.getElementById('archivoSubtitle').value =
      contentData.archivo.subtitle;
   document.getElementById('archivoDescription').value =
      contentData.archivo.description;

   // Contacto Section
   document.getElementById('contactoTitle').value = contentData.contacto.title;
   document.getElementById('contactoSubtitle').value =
      contentData.contacto.subtitle;
   document.getElementById('contactoEmail').value = contentData.contacto.email;
   document.getElementById('contactoInstagram').value =
      contentData.contacto.instagram;
   document.getElementById('contactoWhatsapp').value =
      contentData.contacto.whatsapp;
   document.getElementById('contactoDescription').value =
      contentData.contacto.description;

   // Cargar productos
   loadProductsList();
}

// Configurar uploads de imágenes
function setupImageUploads() {
   // Hero background
   const heroBgInput = document.getElementById('heroBgInput');
   const heroBgPreview = document.getElementById('heroBgPreview');

   if (heroBgInput) {
      heroBgInput.addEventListener('change', (e) => {
         handleImageUpload(e, heroBgPreview, 'hero', 'backgroundImage');
      });
   }

   // Manifiesto image
   const manifiestoImgInput = document.getElementById('manifiestoImgInput');
   const manifiestoImgPreview = document.getElementById('manifiestoImgPreview');

   if (manifiestoImgInput) {
      manifiestoImgInput.addEventListener('change', (e) => {
         handleImageUpload(e, manifiestoImgPreview, 'manifiesto', 'image');
      });
   }

   // Archivo images
   const archivoInputs = document.querySelectorAll(
      '#archivoImageGrid input[type="file"]'
   );
   archivoInputs.forEach((input, index) => {
      input.addEventListener('change', (e) => {
         handleArchivoImageUpload(e, index);
      });
   });
}

// Manejar upload de imagen
function handleImageUpload(event, previewElement, section, field) {
   const file = event.target.files[0];
   if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
         previewElement.src = e.target.result;
         contentData[section][field] = e.target.result;
         showNotification('Imagen actualizada', 'success');
      };
      reader.readAsDataURL(file);
   }
}

// Manejar upload de imagen de archivo
function handleArchivoImageUpload(event, index) {
   const file = event.target.files[0];
   if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
         const imgElement = event.target.parentElement.querySelector('img');
         imgElement.src = e.target.result;
         contentData.archivo.images[index] = e.target.result;
         showNotification('Imagen de archivo actualizada', 'success');
      };
      reader.readAsDataURL(file);
   }
}

// Configurar gestión de productos
function setupProductManagement() {
   const addProductBtn = document.querySelector('.add-product-btn');
   if (addProductBtn) {
      addProductBtn.addEventListener('click', () => {
         showProductModal();
      });
   }
}

// Cargar lista de productos
function loadProductsList() {
   const productsList = document.getElementById('productsList');
   if (!productsList) return;

   productsList.innerHTML = '';

   productsData.forEach((product) => {
      const productCard = createProductCard(product);
      productsList.appendChild(productCard);
   });
}

// Crear tarjeta de producto
function createProductCard(product) {
   const card = document.createElement('div');
   card.className = 'product-card';
   card.innerHTML = `
        <h5>${product.name}</h5>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p>${product.description}</p>
        <div class="product-actions">
            <button class="edit-product-btn" onclick="editProduct(${product.id})">
                <i class="fas fa-edit"></i> Editar
            </button>
            <button class="delete-product-btn" onclick="deleteProduct(${product.id})">
                <i class="fas fa-trash"></i> Eliminar
            </button>
        </div>
    `;
   return card;
}

// Configurar modal
function setupModal() {
   const closeModal = document.querySelector('.close-modal');
   const cancelBtn = document.querySelector('.cancel-btn');

   if (closeModal) {
      closeModal.addEventListener('click', hideProductModal);
   }

   if (cancelBtn) {
      cancelBtn.addEventListener('click', hideProductModal);
   }

   // Cerrar modal al hacer click fuera
   productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
         hideProductModal();
      }
   });

   // Formulario de producto
   if (productForm) {
      productForm.addEventListener('submit', handleProductSubmit);
   }
}

// Mostrar modal de producto
function showProductModal(product = null) {
   const modalTitle = document.getElementById('modalTitle');
   const productName = document.getElementById('productName');
   const productPrice = document.getElementById('productPrice');
   const productDescription = document.getElementById('productDescription');

   if (product) {
      modalTitle.textContent = 'Editar Producto';
      productName.value = product.name;
      productPrice.value = product.price;
      productDescription.value = product.description;
      productForm.dataset.productId = product.id;
   } else {
      modalTitle.textContent = 'Agregar Producto';
      productName.value = '';
      productPrice.value = '';
      productDescription.value = '';
      delete productForm.dataset.productId;
   }

   productModal.classList.remove('hidden');
}

// Ocultar modal de producto
function hideProductModal() {
   productModal.classList.add('hidden');
   productForm.reset();
   delete productForm.dataset.productId;
}

// Manejar envío de formulario de producto
function handleProductSubmit(e) {
   e.preventDefault();

   const productId = productForm.dataset.productId;
   const productData = {
      name: document.getElementById('productName').value,
      price: document.getElementById('productPrice').value,
      description: document.getElementById('productDescription').value,
      images: [], // Por ahora sin imágenes
   };

   if (productId) {
      // Editar producto existente
      const index = productsData.findIndex((p) => p.id == productId);
      if (index !== -1) {
         productsData[index] = { ...productsData[index], ...productData };
      }
   } else {
      // Agregar nuevo producto
      productData.id = Date.now();
      productsData.push(productData);
   }

   loadProductsList();
   hideProductModal();
   showNotification('Producto guardado exitosamente', 'success');
}

// Editar producto
function editProduct(productId) {
   const product = productsData.find((p) => p.id === productId);
   if (product) {
      showProductModal(product);
   }
}

// Eliminar producto
function deleteProduct(productId) {
   if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      productsData = productsData.filter((p) => p.id !== productId);
      loadProductsList();
      showNotification('Producto eliminado', 'success');
   }
}

// Guardar todos los cambios
function saveAllChanges() {
   // Recopilar datos de los formularios
   const updatedContent = {
      hero: {
         badgeText: document.getElementById('heroBadgeText').value,
         badgeYear: document.getElementById('heroBadgeYear').value,
         title: document.getElementById('heroTitle').value,
         tagline: document.getElementById('heroTagline').value,
         statementTitle: document.getElementById('heroStatementTitle').value,
         statementText: document.getElementById('heroStatementText').value,
         backgroundImage: contentData.hero.backgroundImage,
      },
      manifiesto: {
         title: document.getElementById('manifiestoTitle').value,
         subtitle: document.getElementById('manifiestoSubtitle').value,
         description: document.getElementById('manifiestoDescription').value,
         image: contentData.manifiesto.image,
      },
      catalogo: {
         title: document.getElementById('catalogoTitle').value,
         subtitle: document.getElementById('catalogoSubtitle').value,
         description: document.getElementById('catalogoDescription').value,
      },
      archivo: {
         title: document.getElementById('archivoTitle').value,
         subtitle: document.getElementById('archivoSubtitle').value,
         description: document.getElementById('archivoDescription').value,
         images: contentData.archivo.images,
      },
      contacto: {
         title: document.getElementById('contactoTitle').value,
         subtitle: document.getElementById('contactoSubtitle').value,
         email: document.getElementById('contactoEmail').value,
         instagram: document.getElementById('contactoInstagram').value,
         whatsapp: document.getElementById('contactoWhatsapp').value,
         description: document.getElementById('contactoDescription').value,
      },
   };

   // Actualizar datos
   contentData = updatedContent;

   // Guardar en localStorage para que el sitio principal pueda acceder
   localStorage.setItem('stigmaContentData', JSON.stringify(contentData));
   localStorage.setItem('stigmaProductsData', JSON.stringify(productsData));

   // Generar archivo de datos para el sitio principal
   generateSiteDataFile();

   showNotification(
      'Todos los cambios han sido guardados y sincronizados con el sitio principal',
      'success'
   );
}

// Generar archivo de datos para el sitio principal
function generateSiteDataFile() {
   const siteData = {
      content: contentData,
      products: productsData,
      lastUpdated: new Date().toISOString(),
   };

   // Crear un blob con los datos
   const blob = new Blob([JSON.stringify(siteData, null, 2)], {
      type: 'application/json',
   });

   // Crear enlace de descarga
   const url = URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = url;
   a.download = 'stigma-site-data.json';
   a.style.display = 'none';
   document.body.appendChild(a);
   a.click();
   document.body.removeChild(a);
   URL.revokeObjectURL(url);
}

// Probar sincronización con el sitio principal
function testSynchronization() {
   // Guardar datos primero
   saveAllChanges();

   // Abrir el sitio principal en una nueva pestaña
   const siteUrl = window.location.href.replace('admin.html', 'index.html');
   window.open(siteUrl, '_blank');

   showNotification(
      'Sitio principal abierto en nueva pestaña. Los cambios deberían estar sincronizados.',
      'success'
   );
}

// Mostrar notificación
function showNotification(message, type = 'info') {
   // Crear elemento de notificación
   const notification = document.createElement('div');
   notification.className = `notification notification-${type}`;
   notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

   // Estilos básicos
   notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
           type === 'success'
              ? '#4CAF50'
              : type === 'error'
              ? '#f44336'
              : type === 'warning'
              ? '#ff9800'
              : '#2196F3'
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-family: 'Monaco', monospace;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;

   // Agregar al DOM
   document.body.appendChild(notification);

   // Botón de cerrar
   const closeBtn = notification.querySelector('.notification-close');
   closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
    `;

   closeBtn.addEventListener('click', () => {
      notification.remove();
   });

   // Auto-remover después de 5 segundos
   setTimeout(() => {
      if (notification.parentNode) {
         notification.remove();
      }
   }, 5000);
}

// Función para agregar nueva imagen al archivo
function addArchivoImage() {
   const imageGrid = document.getElementById('archivoImageGrid');
   const newImageItem = document.createElement('div');
   newImageItem.className = 'image-item';
   newImageItem.innerHTML = `
        <label>Nueva Imagen</label>
        <div class="image-upload">
            <img src="./public/images/placeholder.jpg" alt="Nueva imagen">
            <input type="file" accept="image/*">
            <button type="button" class="upload-btn">Cambiar Imagen</button>
        </div>
    `;

   imageGrid.appendChild(newImageItem);

   // Configurar event listener para la nueva imagen
   const newInput = newImageItem.querySelector('input[type="file"]');
   newInput.addEventListener('change', (e) => {
      const index = contentData.archivo.images.length;
      handleArchivoImageUpload(e, index);
      contentData.archivo.images.push(''); // Placeholder
   });
}

// Event listener para el botón de agregar imagen
document.addEventListener('click', (e) => {
   if (e.target.classList.contains('add-image-btn')) {
      addArchivoImage();
   }
});
