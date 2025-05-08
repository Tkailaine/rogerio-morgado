/// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a');
const sliderContainer = document.querySelector('.bandeira');
const logoImg = document.querySelector('.logo img');
const tituloBranco = document.querySelector('.branco');
const subtituloBranco = document.querySelector('.subtitulo-branco');
const menuIcones = document.querySelectorAll('.menu-toggle .line-menu');

// Função para verificar a visibilidade da seção
function checkVisibility() {
  const rect = sliderContainer.getBoundingClientRect();
  const isSmallScreen = window.innerWidth <= 768;

  if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
    // Header com fundo claro
    document.querySelector('header.navbar').classList.add('scrolled');
    logoImg.src = "imagens/logo-colorida.png";
    tituloBranco.style.color = "black";
    subtituloBranco.style.color = "black";
    menuIcones.forEach(span => {
      span.style.background = '#08376d';
    });

    if (!isSmallScreen) {
      // Apenas em telas grandes, altera a cor dos links
      menuLinks.forEach(link => {
        link.classList.remove('hover-white');
        link.classList.add('hover-blue');
        link.style.color = "#08376d";
      });
    }

  } else {
    // Header transparente sobre o banner
    document.querySelector('header.navbar').classList.remove('scrolled');
    logoImg.src = "imagens/logo-sem-fundo.png";
    tituloBranco.style.color = "white";
    subtituloBranco.style.color = "white";
    menuIcones.forEach(span => {
      span.style.background = 'white';
    });

    if (!isSmallScreen) {
      // Apenas em telas grandes, altera a cor dos links
      menuLinks.forEach(link => {
        link.classList.remove('hover-blue');
        link.classList.add('hover-white');
        link.style.color = "white";
      });
    }
  }

  // Em telas pequenas, mantém os links sempre brancos
  if (isSmallScreen) {
    menuLinks.forEach(link => {
      link.style.color = "white";
    });
  }
}

// Abre o menu
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha ao clicar em um link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Atualiza ao rolar
window.addEventListener('scroll', checkVisibility);

// Atualiza ao carregar
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
  



