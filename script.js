// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a');
const portalDestaque = document.querySelector('.portal-destaque');
const sliderContainer = document.querySelector('.bandeira');
const logoImg = document.querySelector('.logo img');
const tituloBranco = document.querySelector('.branco');
const subtituloBranco = document.querySelector('.subtitulo-branco');
const menuIcones = document.querySelectorAll('.menu-toggle .line-menu');
const navbar = document.querySelector('header.navbar');

// Função de visibilidade
function checkVisibility() {
  const rect = sliderContainer.getBoundingClientRect();
  const isMobile = window.innerWidth <= 1100;

  if (isMobile) {
    // MOBILE: mantém tudo branco sobre fundo preto
    menuLinks.forEach(link => {
      link.style.color = 'white';
      link.classList.remove('hover-blue');
      link.classList.remove('hover-white');
    });

    menuIcones.forEach(span => {
      span.style.background = 'white';
    });

    if (portalDestaque) {
      portalDestaque.style.color = 'white';
      portalDestaque.style.border = '2px solid white';
    }

    // Garante que navbar continue com gradiente azul original
    navbar.classList.remove('scrolled');
    navbar.style.backgroundImage = ''; // deixa o CSS controlar o gradiente
    logoImg.src = "../imagens/logo-sem-fundo.png";
    return;
  }

  // DESKTOP
  if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
    // Scrolled: branco
    navbar.classList.add('scrolled');
    logoImg.src = "../imagens/logo-colorida.png";
    tituloBranco && (tituloBranco.style.color = 'black');
    subtituloBranco && (subtituloBranco.style.color = 'black');

    menuIcones.forEach(span => {
      span.style.background = '#08376d';
    });

    menuLinks.forEach(link => {
      link.style.color = '#08376d';
      link.classList.remove('hover-white');
      link.classList.add('hover-blue');
    });

    if (portalDestaque) {
      portalDestaque.style.color = '#08376d';
      portalDestaque.style.border = '2px solid #08376d';
    }

  } else {
    // Antes da rolagem: azul
    navbar.classList.remove('scrolled');
    logoImg.src = "../imagens/logo-sem-fundo.png";
    tituloBranco && (tituloBranco.style.color = 'white');
    subtituloBranco && (subtituloBranco.style.color = 'white');

    menuIcones.forEach(span => {
      span.style.background = 'white';
    });

    menuLinks.forEach(link => {
      link.style.color = 'white';
      link.classList.remove('hover-blue');
      link.classList.add('hover-white');
    });

    if (portalDestaque) {
      portalDestaque.style.color = 'white';
      portalDestaque.style.border = '2px solid white';
    }
  }
}

// Menu mobile
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Eventos
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);





// Selecione todos os links de ancoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Realize a rolagem suave até a seção, com um ajuste de deslocamento
    const targetId = this.getAttribute('href').substring(1); // Remove o '#' do link
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 100, // Ajuste a posição do "respiro"
      behavior: 'smooth'
    });
  });
});



  //ativação de animações
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com as classes de animação
    const elements = document.querySelectorAll('.surge-bottom, .surge-right, .surge-left');
  
    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'visible' quando o elemento entra na visualização
          entry.target.classList.add('visible');
          // Para observar uma vez e parar, economizando recursos
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Ajusta para que o elemento seja considerado visível quando 10% dele estiver na viewport
    });
  
    // Observa todos os elementos
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  



