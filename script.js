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

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

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
const leadForm = document.getElementById('leadForm');
if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('name').value;
        const link = `https://wa.me/5535999252283?text=Olá Zampak! Meu nome é ${nome}. Gostaria de marcar uma aula experimental.`;
        window.open(link, '_blank');
    });
}

// ===== MODAL MATRÍCULA =====
const modal = document.getElementById("modalMatricula");
const openModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");

if (openModalBtns && openModalBtns.length > 0) {
    openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Verifica se o botão está dentro de um pricing-card para extrair o plano
            const pricingCard = btn.closest(".pricing-card");
            if (pricingCard) {
                const planoH3 = pricingCard.querySelector("h3");
                const priceSpan = pricingCard.querySelector(".price");
                
                if (planoH3) {
                    const planoNome = planoH3.textContent;
                    const preco = priceSpan ? priceSpan.textContent.trim().split('/')[0] : "";
                    const planoCompleto = `${planoNome} - ${preco}`;
                    
                    const matPlano = document.getElementById("mat-plano");
                    if (matPlano) {
                        matPlano.value = planoCompleto;
                    }
                }
            }
            if (modal) {
                modal.classList.add("active");
            }
        });
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        if (modal) {
            modal.classList.remove("active");
        }
    });
}

if (modal) {
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.classList.remove("active");
        }
    });
}

// FORM MATRÍCULA - ENVIO AO WHATSAPP
const formMatricula = document.getElementById('formMatricula');
if (formMatricula) {
    formMatricula.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('mat-nome').value;
        const plano = document.getElementById('mat-plano').value;
        const objetivo = document.getElementById('mat-objetivo').value;
        
        if (nome && plano && objetivo) {
            const link = `https://wa.me/5535999252283?text=Olá Zampak! Meu nome é ${nome}. Gostaria de contratar o plano ${plano}. Meu objetivo é ${objetivo}.`;
            window.open(link, '_blank');
            
            // Fecha o modal após enviar
            if (modal) {
                modal.classList.remove("active");
            }
            
            // Limpa o formulário
            formMatricula.reset();
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
}
