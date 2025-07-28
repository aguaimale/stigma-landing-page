// STIGMA Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function () {
   // Initialize all functionality
   initializeProducts();
   initializeArchive();
   initializeMobileNav();
   initializeInstagramFeed();
   initializeContactForm();
   initializeSmoothScrolling();
   updateCurrentYear();
   initializeAnimations();
   initializeManifestoImages();
});

// Product data
const products = [
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
      description: 'Diseño audaz. Para quienes se atreven a ser diferentes.',
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
      description: 'Esencia de la rebeldía. Complementa y define tu estilo.',
      image: './public/images/productos/product4.png',
      price: '$449.00',
   },
];

// Archive data
const archiveItems = [
   {
      id: 1,
      title: 'Tittle campaña',
      description:
         "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://via.placeholder.com/120x120/1A1A1A/FFB6C1?text=Frame+7',
   },
   {
      id: 2,
      title: 'Tittle campaña',
      description:
         "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://via.placeholder.com/120x120/1A1A1A/FFB6C1?text=Frame+8',
   },
   {
      id: 3,
      title: 'Tittle campaña',
      description:
         "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: 'https://via.placeholder.com/120x120/1A1A1A/FFB6C1?text=Frame+9',
   },
];

// Initialize Products Grid
function initializeProducts() {
   const productsGrid = document.getElementById('productsGrid');
   if (!productsGrid) return;

   products.forEach((product, index) => {
      const productCard = createProductCard(product, index);
      productsGrid.appendChild(productCard);
   });
}

// Create Product Card
function createProductCard(product, index) {
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
                <button class="product-action-btn" onclick="showProductDetails(${product.id})">
                    <i class="fas fa-comment"></i>
                </button>
            </div>
            <button class="btn btn-outline product-consult-btn" onclick="consultProduct(${product.id})">
                Consultar Pieza
            </button>
        </div>
    `;

   return card;
}

// Initialize Archive (now handled by HTML)
function initializeArchive() {
   // Archive is now static HTML - no JavaScript needed
   console.log('Archive initialized (static content)');
}

// Mobile Navigation
function initializeMobileNav() {
   const mobileMenuBtn = document.getElementById('mobileMenuBtn');
   const nav = document.getElementById('nav');
   const navLinks = document.querySelectorAll('.nav-link');

   if (mobileMenuBtn && nav) {
      mobileMenuBtn.addEventListener('click', () => {
         mobileMenuBtn.classList.toggle('active');
         nav.classList.toggle('active');
      });

      // Close menu when clicking on a link
      navLinks.forEach((link) => {
         link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
         });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
         if (!mobileMenuBtn.contains(e.target) && !nav.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('active');
         }
      });
   }
}

// Initialize Instagram Feed
function initializeInstagramFeed() {
   const instagramFeed = document.getElementById('instagramFeed');
   if (!instagramFeed) return;

   // Array de imágenes de productos para el Instagram feed
   const instagramPosts = [
      {
         image: './public/images/productos/product1.png',
         alt: 'PIEZA ÚNICA - Instagram Post',
         title: 'PIEZA ÚNICA',
      },
      {
         image: './public/images/productos/product2.png',
         alt: 'PIEZA REBELDE - Instagram Post',
         title: 'PIEZA REBELDE',
      },
      {
         image: './public/images/productos/product3.png',
         alt: 'PIEZA OSCURA - Instagram Post',
         title: 'PIEZA OSCURA',
      },
      {
         image: './public/images/productos/product4.png',
         alt: 'PIEZA LEGENDARIA - Instagram Post',
         title: 'PIEZA LEGENDARIA',
      },
      {
         image: './public/images/productos/product1detail.png',
         alt: 'Detalle PIEZA ÚNICA - Instagram Post',
         title: 'DETALLE ÚNICO',
      },
      {
         image: './public/images/productos/product2detail.png',
         alt: 'Detalle PIEZA REBELDE - Instagram Post',
         title: 'DETALLE REBELDE',
      },
   ];

   instagramPosts.forEach((post, index) => {
      const feedItem = document.createElement('div');
      feedItem.className = 'feed-item';
      feedItem.onclick = () => openInstagramPost(index + 1);

      const img = document.createElement('img');
      img.src = post.image;
      img.alt = post.alt;
      img.className = 'feed-item-img';

      const overlay = document.createElement('div');
      overlay.className = 'feed-item-overlay';

      const title = document.createElement('span');
      title.className = 'feed-item-title';
      title.textContent = post.title;

      overlay.appendChild(title);
      feedItem.appendChild(img);
      feedItem.appendChild(overlay);
      instagramFeed.appendChild(feedItem);
   });
}

// Initialize Contact Form
function initializeContactForm() {
   const contactForm = document.getElementById('contactForm');
   if (!contactForm) return;

   contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleContactSubmit();
   });
}

// Initialize Smooth Scrolling
function initializeSmoothScrolling() {
   const navLinks = document.querySelectorAll('.nav-link');

   navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
         e.preventDefault();
         const targetId = this.getAttribute('href');
         const targetSection = document.querySelector(targetId);

         if (targetSection) {
            targetSection.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
            });
         }
      });
   });
}

// Update Current Year - Fixed to 2025
function updateCurrentYear() {
   // Year is now fixed to 2025 in HTML
   console.log('Current year is fixed to 2025');
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
      '.hero-text, .hero-image, .about-text, .about-image-section, .manifesto-images, .product-card, .archive-main, .archive-sidebar, .contact-info, .contact-form-container'
   );

   animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
   });
}

// Initialize Manifesto Images
function initializeManifestoImages() {
   // Las imágenes del manifiesto no necesitan interacción
   // Se mantienen como elementos visuales estáticos
   console.log('Manifesto images initialized (no interaction)');
}

// Product Functions
function toggleFavorite(productId) {
   console.log(`Toggle favorite for product ${productId}`);
   // Función silenciosa - no muestra notificaciones
}

function showProductDetails(productId) {
   console.log(`Show details for product ${productId}`);
   // Función silenciosa - no muestra notificaciones
}

function consultProduct(productId) {
   console.log(`Consult product ${productId}`);
   // Navigate to product detail page with absolute path
   const baseUrl = window.location.origin;
   window.location.href = `${baseUrl}/producto.html?id=${productId}`;
}

// Archive Functions
function openArchiveItem(itemId) {
   console.log(`Open archive item ${itemId}`);
   // Add your archive item logic here
}

// Instagram Functions
function openInstagramPost(postId) {
   console.log(`Open Instagram post ${postId}`);
   // Función silenciosa - no muestra notificaciones
}

// Contact Form Functions
function handleContactSubmit() {
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   if (!name || !email || !message) {
      showNotification('Por favor completa todos los campos', 'error');
      return;
   }

   // Simulate form submission
   console.log('Contact form submitted:', { name, email, message });

   // Show success message
   showNotification('Mensaje enviado exitosamente', 'success');

   // Reset form
   document.getElementById('contactForm').reset();
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

   // Add hover effects to product cards
   const productCards = document.querySelectorAll('.product-card');
   productCards.forEach((card) => {
      card.addEventListener('mouseenter', function () {
         this.style.transform = 'translateY(-5px) rotate(0deg)';
      });

      card.addEventListener('mouseleave', function () {
         const index = Array.from(productCards).indexOf(this);
         this.style.transform = `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)`;
      });
   });

   // Add click effects to social links
   const socialLinks = document.querySelectorAll('.contact-text');
   socialLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
         // Add ripple effect
         const ripple = document.createElement('span');
         ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 182, 193, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

         const rect = this.getBoundingClientRect();
         const size = Math.max(rect.width, rect.height);
         const x = e.clientX - rect.left - size / 2;
         const y = e.clientY - rect.top - size / 2;

         ripple.style.width = ripple.style.height = size + 'px';
         ripple.style.left = x + 'px';
         ripple.style.top = y + 'px';

         this.style.position = 'relative';
         this.appendChild(ripple);

         setTimeout(() => {
            if (ripple.parentNode) {
               ripple.parentNode.removeChild(ripple);
            }
         }, 600);
      });
   });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

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

   // Parallax effect for tree backgrounds
   const treeBgs = document.querySelectorAll('.tree-bg');
   const scrolled = window.pageYOffset;

   treeBgs.forEach((bg, index) => {
      const speed = 0.3 + index * 0.1;
      const yPos = -(scrolled * speed);
      bg.style.transform = `translateY(${yPos}px)`;
   });
});

// Add loading animation
window.addEventListener('load', function () {
   document.body.style.opacity = '0';
   document.body.style.transition = 'opacity 0.5s ease';

   setTimeout(() => {
      document.body.style.opacity = '1';
   }, 100);
});

console.log('STIGMA Landing Page loaded successfully! 🖤');
