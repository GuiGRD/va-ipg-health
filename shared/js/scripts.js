
// Função para direcionar para outro slide
function Slide(target) {
  // Verifica se está dentro do ambiente do Veeva
  console.log('TEste')
  if (typeof Veeva !== 'undefined') {
    com.veeva.clm.gotoSlide(target);
  } else {
    window.location.href = '../' + target + '/index.html';
  }
}
