// STIGMA Product Page JavaScript

document.addEventListener('DOMContentLoaded', function () {
   // Initialize all functionality
   initializeProductData();
   initializeRelatedProducts();
   updateCurrentYear();
   initializeAnimations();
   initializeImageGallery();
});

// Product database - this would normally come from a database or API
const productsDatabase = {
   1: {
      id: 1,
      name: 'PIEZA ÚNICA',
      subtitle: 'Colección Limitada',
      price: '$299.00',
      description:
         'Esta pieza única de STIGMA representa la esencia de la rebeldía y la individualidad. Diseñada con materiales premium y acabados meticulosos, cada detalle ha sido cuidadosamente considerado para crear un accesorio que no solo complementa tu estilo, sino que lo define.',
      longDescription:
         'Inspirada en la oscuridad y la naturaleza indómita, esta pieza es una declaración de autenticidad. Perfecta para aquellos que se atreven a ser diferentes y llevan su rebeldía con orgullo.',
      images: [
         './public/images/productos/product1.png',
         './public/images/productos/product1detail.png',
      ],
      galleryImages: [
         './public/images/productos/product1.png',
         './public/images/productos/product1detail.png',
      ],
      details: {
         material: 'Acero inoxidable premium',
         finish: 'Negro mate con detalles dorados',
         size: 'Ajustable (18-22cm)',
         weight: '45g',
      },
   },
   2: {
      id: 2,
      name: 'PIEZA REBELDE',
      subtitle: 'Colección Audaz',
      price: '$349.00',
      description:
         'Una pieza que desafía las convenciones. Diseñada para quienes no temen expresar su individualidad a través de accesorios que hablan por sí mismos.',
      longDescription:
         'Con un diseño que combina elegancia y rebeldía, esta pieza es perfecta para aquellos que buscan destacar sin comprometer su autenticidad.',
      images: [
         './public/images/productos/product2.png',
         './public/images/productos/product2detail.png',
      ],
      galleryImages: [
         './public/images/productos/product2.png',
         './public/images/productos/product2detail.png',
      ],
      details: {
         material: 'Acero inoxidable premium',
         finish: 'Negro mate con acabados plateados',
         size: 'Ajustable (19-23cm)',
         weight: '52g',
      },
   },
   3: {
      id: 3,
      name: 'PIEZA OSCURA',
      subtitle: 'Colección Nocturna',
      price: '$399.00',
      description:
         'Inspirada en la misteriosa belleza de la noche. Esta pieza captura la esencia de la oscuridad elegante y la sofisticación rebelde.',
      longDescription:
         'Cada detalle ha sido cuidadosamente diseñado para reflejar la dualidad entre la elegancia y la rebeldía, creando un accesorio único.',
      images: [
         './public/images/productos/product3.png',
         './public/images/productos/product3detail.png',
      ],
      galleryImages: [
         './public/images/productos/product3.png',
         './public/images/productos/product3detail.png',
      ],
      details: {
         material: 'Acero inoxidable premium',
         finish: 'Negro profundo con detalles dorados',
         size: 'Ajustable (17-21cm)',
         weight: '48g',
      },
   },
   4: {
      id: 4,
      name: 'PIEZA LEGENDARIA',
      subtitle: 'Colección Élite',
      price: '$449.00',
      description:
         'La pieza definitiva de STIGMA. Una obra maestra que combina diseño innovador con materiales de la más alta calidad.',
      longDescription:
         'Esta pieza legendaria representa el pináculo del diseño rebelde, perfecta para quienes buscan un accesorio que trascienda las tendencias.',
      images: [
         './public/images/productos/product4.png',
         './public/images/productos/product4detail.png',
      ],
      galleryImages: [
         './public/images/productos/product4.png',
         './public/images/productos/product4detail.png',
      ],
      details: {
         material: 'Acero inoxidable premium',
         finish: 'Negro mate con detalles dorados y plateados',
         size: 'Ajustable (18-22cm)',
         weight: '55g',
      },
   },
};

// Default product data
let productData = productsDatabase[1];

// Related products data
const relatedProducts = [
   {
      id: 2,
      name: 'PIEZA REBELDE',
      price: '$349.00',
      image: './public/images/productos/product2.png',
   },
   {
      id: 3,
      name: 'PIEZA OSCURA',
      price: '$399.00',
      image: './public/images/productos/product3.png',
   },
   {
      id: 4,
      name: 'PIEZA LEGENDARIA',
      price: '$449.00',
      image: './public/images/productos/product4.png',
   },
];

// Initialize Product Data
function initializeProductData() {
   // Get URL parameters to determine which product to show
   const urlParams = new URLSearchParams(window.location.search);
   const productId = parseInt(urlParams.get('id')) || 1;

   // Load the correct product data based on ID
   productData = productsDatabase[productId] || productsDatabase[1];
   loadProductData(productData);
}

// Load Product Data
function loadProductData(product) {
   // Update product title
   const productTitle = document.getElementById('productTitle');
   if (productTitle) {
      productTitle.textContent = product.name;
   }

   // Update product subtitle
   const productSubtitle = document.querySelector('.product-subtitle');
   if (productSubtitle && product.subtitle) {
      productSubtitle.textContent = product.subtitle;
   }

   // Update product price
   const productPrice = document.getElementById('productPrice');
   if (productPrice) {
      productPrice.textContent = product.price;
   }

   // Update product description
   const productDescription = document.getElementById('productDescription');
   if (productDescription) {
      productDescription.textContent = product.description;
   }

   // Update main image
   const mainImage = document.getElementById('mainImage');
   if (mainImage && product.images.length > 0) {
      mainImage.src = product.images[0];
      mainImage.alt = product.name;
   }

   // Update gallery images
   updateGalleryImages(product.galleryImages);

   // Update product details
   updateProductDetails(product.details);
}

// Update Gallery Images
function updateGalleryImages(images) {
   const galleryContainer = document.querySelector('.image-gallery');
   if (!galleryContainer) return;

   galleryContainer.innerHTML = '';

   images.forEach((image, index) => {
      const galleryImage = document.createElement('div');
      galleryImage.className = `gallery-image ${index === 0 ? 'active' : ''}`;
      galleryImage.onclick = () => changeImage(index);

      galleryImage.innerHTML = `
         <img src="${image}" alt="Imagen ${index + 1}" class="gallery-img">
      `;

      galleryContainer.appendChild(galleryImage);
   });
}

// Update Product Details
function updateProductDetails(details) {
   const materialValue = document.querySelector(
      '.detail-item:nth-child(1) .detail-value'
   );
   const finishValue = document.querySelector(
      '.detail-item:nth-child(2) .detail-value'
   );
   const sizeValue = document.querySelector(
      '.detail-item:nth-child(3) .detail-value'
   );
   const weightValue = document.querySelector(
      '.detail-item:nth-child(4) .detail-value'
   );

   if (materialValue) materialValue.textContent = details.material;
   if (finishValue) finishValue.textContent = details.finish;
   if (sizeValue) sizeValue.textContent = details.size;
   if (weightValue) weightValue.textContent = details.weight;
}

// Initialize Image Gallery
function initializeImageGallery() {
   // Set up click handlers for gallery images
   const galleryImages = document.querySelectorAll('.gallery-image');
   galleryImages.forEach((image, index) => {
      image.addEventListener('click', () => changeImage(index));
   });
}

// Change Main Image
function changeImage(imageIndex) {
   const mainImage = document.getElementById('mainImage');
   const galleryImages = document.querySelectorAll('.gallery-image');

   if (!mainImage || !productData.images[imageIndex]) return;

   // Update main image
   mainImage.src = productData.images[imageIndex];
   mainImage.alt = `Imagen ${imageIndex + 1} de ${productData.name}`;

   // Update active state in gallery
   galleryImages.forEach((image, index) => {
      image.classList.toggle('active', index === imageIndex);
   });

   // Add a subtle animation
   mainImage.style.opacity = '0';
   setTimeout(() => {
      mainImage.style.opacity = '1';
   }, 150);
}

// Initialize Related Products
function initializeRelatedProducts() {
   const relatedGrid = document.getElementById('relatedGrid');
   if (!relatedGrid) return;

   relatedProducts.forEach((product) => {
      const relatedCard = createRelatedProductCard(product);
      relatedGrid.appendChild(relatedCard);
   });
}

// Create Related Product Card
function createRelatedProductCard(product) {
   const card = document.createElement('div');
   card.className = 'related-product-card';
   card.onclick = () => navigateToProduct(product.id);

   card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="related-product-img">
      <div class="related-product-overlay">
         <h3 class="related-product-title">${product.name}</h3>
         <div class="related-product-price">${product.price}</div>
      </div>
   `;

   return card;
}

// Navigate to Product
function navigateToProduct(productId) {
   // Navigate to the product detail page
   window.location.href = `producto.html?id=${productId}`;
}

// Add to Cart Function
function addToCart() {
   // In a real application, this would add the product to a shopping cart
   console.log('Adding product to cart:', productData.id);
   showNotification('Producto agregado al carrito', 'success');
}

// Add to Wishlist Function
function addToWishlist() {
   // In a real application, this would add the product to a wishlist
   console.log('Adding product to wishlist:', productData.id);
   showNotification('Producto agregado a favoritos', 'success');
}

// Update Current Year
function updateCurrentYear() {
   const currentYearElement = document.getElementById('currentYear');
   if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
   }
}

// Initialize Animations
function initializeAnimations() {
   // Add scroll animations
   const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
   };

   const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
         }
      });
   }, observerOptions);

   // Observe elements for animation
   const animatedElements = document.querySelectorAll(
      '.product-images, .product-info, .related-product-card'
   );

   animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
   });
}

// Utility Functions
function showNotification(message, type = 'info') {
   // Create notification element
   const notification = document.createElement('div');
   notification.className = `notification notification-${type}`;
   notification.textContent = message;

   // Style the notification
   notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      background-color: ${
         type === 'success'
            ? '#4CAF50'
            : type === 'error'
            ? '#f44336'
            : '#2196F3'
      };
      color: white;
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      font-weight: 500;
      max-width: 300px;
      font-family: 'Monaco', 'Courier New', monospace;
   `;

   // Add to page
   document.body.appendChild(notification);

   // Animate in
   setTimeout(() => {
      notification.style.transform = 'translateX(0)';
   }, 100);

   // Remove after 3 seconds
   setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
         if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
         }
      }, 300);
   }, 3000);
}

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function () {
   // Add hover effects to buttons
   const buttons = document.querySelectorAll('.btn');
   buttons.forEach((button) => {
      button.addEventListener('mouseenter', function () {
         this.style.transform = 'translateY(-2px)';
      });

      button.addEventListener('mouseleave', function () {
         this.style.transform = 'translateY(0)';
      });
   });

   // Add hover effects to related product cards
   const relatedCards = document.querySelectorAll('.related-product-card');
   relatedCards.forEach((card) => {
      card.addEventListener('mouseenter', function () {
         this.style.transform = 'translateY(-5px)';
      });

      card.addEventListener('mouseleave', function () {
         this.style.transform = 'translateY(0)';
      });
   });
});

// Add scroll-based header styling
window.addEventListener('scroll', function () {
   const header = document.querySelector('.header');
   if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
      header.style.backdropFilter = 'blur(15px)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
   } else {
      header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
      header.style.boxShadow = 'none';
   }
});

// Add loading animation
window.addEventListener('load', function () {
   document.body.style.opacity = '0';
   document.body.style.transition = 'opacity 0.5s ease';

   setTimeout(() => {
      document.body.style.opacity = '1';
   }, 100);
});

console.log('STIGMA Product Page loaded successfully! 🖤');
