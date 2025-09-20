// JavaScript untuk mengubah navbar pada scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// JavaScript untuk fungsi tombol Stella AI
document.querySelector('.stella-ai-btn').addEventListener('click', function() {
  alert('Stella AI diaktifkan! Fitur AI membantu dalam pencarian informasi.');
});

// Tambahkan event listener untuk tombol Stella AI di menu mobile
const mobileStellaBtn = document.querySelector('#mobile-menu .stella-ai-btn');
if (mobileStellaBtn) {
  mobileStellaBtn.addEventListener('click', function() {
    alert('Stella AI diaktifkan! Fitur AI membantu dalam pencarian informasi.');
  });
}

// JavaScript untuk filter kategori blog
    document.addEventListener('DOMContentLoaded', function() {
      const categoryButtons = document.querySelectorAll('.category-btn');
      const blogItems = document.querySelectorAll('.blog-card');
      
      categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Hapus class active dari semua button
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          
          // Tambah class active ke button yang diklik
          this.classList.add('active');
          
          const category = this.getAttribute('data-category');
          
          // Filter blog items
          blogItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    });

    // JavaScript untuk mengontrol video testimoni
document.addEventListener('DOMContentLoaded', function() {
  const videoWrappers = document.querySelectorAll('.group');
  
  videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video');
    
    // Saat mouse masuk ke wrapper video
    wrapper.addEventListener('mouseenter', function() {
      // Hentikan semua video lainnya
      document.querySelectorAll('video').forEach(v => {
        if (v !== video) {
          v.pause();
          v.currentTime = 0;
        }
      });
      
      // Putar video yang dihover
      video.play().catch(e => console.log("Autoplay prevented: ", e));
    });
    
    // Saat mouse keluar dari wrapper video
    wrapper.addEventListener('mouseleave', function() {
      video.pause();
      video.currentTime = 0;
    });
    
    // Optional: Tambahkan click untuk memutar di mobile
    wrapper.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});

    const productsWrapper = document.querySelector('.products-wrapper');
    const dotsContainer = document.querySelector('.dots-container');
    const productsPerPage = 4;
    let currentPage = 0;
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Create product groups
    for (let i = 0; i < totalPages; i++) {
        const productGroup = document.createElement('div');
        productGroup.className = 'product-group';
        
        const startIndex = i * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage, products.length);
        
        for (let j = startIndex; j < endIndex; j++) {
            const product = products[j];
            const productElement = document.createElement('div');
            productElement.className = 'content-scrollY';
            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.alt}">
                <h3>${product.title}</h3>
                <h4>${product.price}</h4>
            `;
            productGroup.appendChild(productElement);
        }
        
        productsWrapper.appendChild(productGroup);
    }

    // Create dots
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToPage(i);
        });
        dotsContainer.appendChild(dot);
    }

    function goToPage(page) {
        currentPage = page;
        const translateX = -currentPage * 100;
        productsWrapper.style.transform = `translateX(${translateX}%)`;
        
        // Update active dot
        document.querySelectorAll('.dot').forEach((dot, index) => {
            if (index === currentPage) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };