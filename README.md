# ProjectZampackGym - Documentação

## Descrição do Projeto
Projeto de website para academia Zampak Gym com design responsivo, animações interativas e funcionalidades de agendamento.

---

## 📋 Estrutura de Arquivos

- **index.html** - Estrutura HTML da página principal
- **style.css** - Estilos e responsividade
- **script.js** - Lógica JavaScript com funcionalidades interativas
- **sw.js** - Service Worker para funcionalidade offline
- **manifest.json** - Configuração da aplicação web progressiva (PWA)

---

## 🔧 Funções do Script.js

### 1. **Partículas Animadas (particlesJS)**
```javascript
particlesJS('particles-js', {...})
```
- Inicializa animação de partículas douradas no fundo da página
- Cria 100 partículas que se movem aleatoriamente
- **Interatividade**: Partículas aumentam ao passar o mouse e são repelidas ao clicar
- Conecta partículas próximas com linhas para efeito visual premium

---

### 2. **Menu Mobile (toggleMenu)**
```javascript
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
```
- Abre/fecha o menu de navegação em dispositivos mobile
- Detecta clique no ícone de menu hambúrguer
- Alterna a classe CSS 'active' para mostrar/esconder links

---

### 3. **Animação de Revelação (revealOnScroll)**
```javascript
function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
```
- Anima elementos à medida que o usuário faz scroll na página
- Detecta quando um elemento entra na área visível da tela
- Adiciona a classe 'active' para iniciar animação CSS
- Executa ao carregar a página e durante cada scroll

---

### 4. **Accordion FAQ**
```javascript
document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const isOpen = body.style.maxHeight;
        // ... código ...
    });
});
```
- Controla a seção de Perguntas Frequentes (FAQ)
- Expande/collapsa respostas ao clicar nos títulos
- Fecha resposta anterior quando abre uma nova
- Usa animação suave com maxHeight

---

### 5. **Formulário de Aula Experimental**
```javascript
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('name').value;
    const link = `https://wa.me/5535999252283?text=...`;
    window.open(link, '_blank');
});
```
- Captura o nome do usuário no formulário
- Redireciona para WhatsApp com mensagem pré-formatada
- Permite contato direto com a academia
- Abre link em nova aba

---

### 6. **Modal de Matrícula**
```javascript
const modal = document.getElementById("modalMatricula");
const openModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");
```
- Abre/fecha modal de inscrição/matrícula
- **Abrir**: Clique em botões com classe `.open-modal`
- **Fechar**: Clique no botão X ou fora do modal
- Mostra/esconde modal alterando classe 'active'

---

## 🎨 Recursos Principais

- ✨ Animações de partículas interativas
- 📱 Menu responsivo para mobile
- 🎬 Efeitos de scroll reveal nos elementos
- ❓ FAQ com accordion interativo
- 💬 Integração com WhatsApp
- 🔐 Modal para agendamentos
- 🌐 PWA com suporte offline

