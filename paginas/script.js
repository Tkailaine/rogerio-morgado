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
