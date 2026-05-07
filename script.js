// CONFIGURAÇÃO DAS PARTÍCULAS
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#D4AF37" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
    "size": { "value": 1.5, "random": true, "anim": { "enable": false } },
    "line_linked": { "enable": true, "distance": 130, "color": "#D4AF37", "opacity": 0.1, "width": 1 },
    "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": true, "mode": "repulse" },
      "resize": true
    },
    "modes": {
      "bubble": { "distance": 100, "size": 4, "duration": 2, "opacity": 0.8, "speed": 3 },
      "repulse": { "distance": 200, "duration": 0.4 }
    }
  },
  "retina_detect": true
});

// MENU MOBILE
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ANIMAÇÃO DE REVELAÇÃO
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// FAQ
document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const isOpen = body.style.maxHeight;
        
        document.querySelectorAll('.accordion-body').forEach(el => el.style.maxHeight = null);
        
        if (!isOpen) {
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});

// FORM AGENDAR AULA EXPERIMENTAL
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('name').value;
    const link = `https://wa.me/5535999252283?text=Olá Zampak! Meu nome é ${nome}. Gostaria de marcar uma aula experimental.`;
    window.open(link, '_blank');
});

// ===== MODAL MATRÍCULA =====
const modal = document.getElementById("modalMatricula");
const openModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");

openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
    });
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.classList.remove("active");
    }
});