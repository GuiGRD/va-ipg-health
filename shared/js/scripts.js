
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

$('.jsButtonNav').on('click', function() {
  $('.menu').toggleClass('active');
});

$('.jsBtnPopup').on('click', function() {
  let target = $(this).data('popup');
  let popup = $('#' + target);

  popup.fadeIn(300);

  popup.css({
    'display': 'flex'
  })
});

$('.jsClosePopoup').on('click', function() {
  $('.popup').fadeOut(300);
});