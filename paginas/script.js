
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
  

  /// Seleciona os elementos
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('nav.menu ul li a'); // Seleciona todos os links no menu
const sliderContainer = document.querySelector('.slider-container'); // A div que deve ser observada
const logoImg = document.querySelector('.logo img'); // Logo
const tituloBranco = document.querySelector('.branco');
const subtituloBranco = document.querySelector('.subtitulo-branco');
const menuIcone = document.querySelector('span')

// Função para verificar a visibilidade total da div
function checkVisibility() {
  const rect = sliderContainer.getBoundingClientRect();

  // Verifica se a div saiu completamente da tela
  if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
    // Quando a div sair completamente da tela, adiciona a classe scrolled
    document.querySelector('header.navbar').classList.add('scrolled');
    
    // Muda a logo
    logoImg.src = "imagens/logo-colorida.png"; // Nova logo (escura)
    tituloBranco.style.color = "#08376d";
    subtituloBranco.style.color = "#08376d";
  } else {
    // Quando a div ainda estiver visível, remove a classe scrolled
    document.querySelector('header.navbar').classList.remove('scrolled');
    
    // Volta a logo original
    logoImg.src = "imagens/logo-sem-fundo.png"; // Logo original (clara)
    tituloBranco.style.color = "white";
    subtituloBranco.style.color = "white";
    menuIcone.style.background = 'white'
    
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
