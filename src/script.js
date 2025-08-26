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

