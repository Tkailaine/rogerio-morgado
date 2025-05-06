/// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a'); // Seleciona todos os links no menu
const sliderContainer = document.querySelector('.bandeira'); // A div que deve ser observada
const logoImg = document.querySelector('.logo img'); // Logo
const tituloBranco = document.querySelector('.branco');
const subtituloBranco = document.querySelector('.subtitulo-branco');
const menuIcones = document.querySelectorAll('.menu-toggle .line-menu');



// Função para verificar a visibilidade total da div
function checkVisibility() {
  const rect = sliderContainer.getBoundingClientRect();

  if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
    // Header fixo com fundo claro
    document.querySelector('header.navbar').classList.add('scrolled');
    logoImg.src = "imagens/logo-colorida.png";
    tituloBranco.style.color = "#08376d";
    subtituloBranco.style.color = "#08376d";
    menuIcones.forEach(span => {
      span.style.background = '#08376d';
    });

    // Links: hover azul
    menuLinks.forEach(link => {
      link.classList.remove('hover-white');
      link.classList.add('hover-blue');
    });

  } else {
    // Header transparente sobre o banner
    document.querySelector('header.navbar').classList.remove('scrolled');
    logoImg.src = "imagens/logo-sem-fundo.png";
    tituloBranco.style.color = "white";
    subtituloBranco.style.color = "white";
    menuIcones.forEach(span => {
      span.style.background = 'white';
    });

    // Links: hover branco
    menuLinks.forEach(link => {
      link.classList.remove('hover-blue');
      link.classList.add('hover-white');
    });
  }


}

// Abre o menu ao clicar no botão hamburger
menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

// Fecha o menu ao clicar no botão de fechar
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha o menu ao clicar em um link de navegação (quando em telas pequenas)
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Chama a função sempre que o usuário rolar a página
window.addEventListener('scroll', checkVisibility);

// Chama a função assim que a página carregar
document.addEventListener('DOMContentLoaded', checkVisibility);



//BANDEIRA SLIDER
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-container .slide');
const prevButton = document.querySelector('.slider-container .prev');
const nextButton = document.querySelector('.slider-container .next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Automatização do slide a cada 5 segundos
setInterval(nextSlide, 5000);






function toggleArea(id) {
  const card = document.getElementById(id);
  const detalhes = card.querySelector('.detalhes');
  const miniResumo = card.querySelector('.mini-resumo');
  const btnExpand = card.querySelector('.btn-expand');
  const btnCollapse = card.querySelector('.btn-collapse');

  // Alterna a exibição dos detalhes e do resumo
  if (detalhes.style.display === 'block') {
    detalhes.style.display = 'none';
    miniResumo.style.display = 'block';
    btnExpand.style.display = 'inline-block';
    btnCollapse.style.display = 'none';
    card.style.height = 'auto';
  } else {
    detalhes.style.display = 'block';
    miniResumo.style.display = 'none';
    btnExpand.style.display = 'none';
    btnCollapse.style.display = 'inline-block';
    card.style.height = 'auto';
  }
}






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
  



