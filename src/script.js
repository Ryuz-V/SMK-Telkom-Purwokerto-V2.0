// JavaScript untuk toggle mobile menu
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

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

// Product slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            img: "/asset/Shoe_1.webp",
            alt: "Shoe_1_Asics",
            title: "ASICS GEL-KAYANO 30 Shoe",
            price: "$160.00"
        },
        {
            img: "/asset/Shoe_2.webp",
            alt: "Shoe_2_Asics",
            title: "ASICS GEL-NIMBUS 25 Shoe",
            price: "$160.00"
        },
        {
            img: "/asset/Shoe_3.webp",
            alt: "Shoe_3_Asics",
            title: "ASICS NOVABLAST 4 Shoe",
            price: "$140.00"
        },
        {
            img: "/asset/Shoe_4.webp",
            alt: "Shoe_1_Converse",
            title: "Converse x NARUTO SHIPPUDEN Itachi Weapon Mid Shoe",
            price: "$120.00"
        },
        {
            img: "/asset/Shoe_5.jpg",
            alt: "Shoe_1_Adidas",
            title: "McCartney Sportswear Shoe",
            price: "$230.00"
        },
        {
            img: "/asset/Shoe_6.jpg",
            alt: "Shoe_2_Adidas",
            title: "Adistar 3 Shoe",
            price: "$116.88"
        },
        {
            img: "/asset/Shoe_7.webp",
            alt: "Shoe_7_Asics",
            title: "ASICS GT-2000 12 Shoe",
            price: "$140.00"
        },
        {
            img: "/asset/Shoe_8.jpg",
            alt: "Shoe_3_Adidas",
            title: "Adidas F50 League TF Shoe",
            price: "$70.00"
        },
        {
            img: "/asset/Shoe_9.jpg",
            alt: "Shoe_4_Adidas",
            title: "CODECHAOS BOA '25 Spikeless Golf Shoes",
            price: "$180.00"
        },
        {
            img: "/asset/Shoe_10.webp",
            alt: "Shoe_1_DC",
            title: "DC Shoes Court Graffik",
            price: "$20.99"
        },
        {
            img: "/asset/Shoe_11.webp",
            alt: "Shoe_2_DC",
            title: "Men Construct Shoe",
            price: "$90.00"
        },
        {
            img: "/asset/Shoe_12.webp",
            alt: "Shoe_3_DC",
            title: "Men Ascend Skate Shoe",
            price: "$115.00"
        }
    ];

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
    }

    // Auto slide (optional)
    // setInterval(() => {
    //     currentPage = (currentPage + 1) % totalPages;
    //     goToPage(currentPage);
    // }, 5000);
});