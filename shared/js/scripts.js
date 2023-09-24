localStorage.setItem('email', 'doutor@exemplo.com.br');

var Ref1 = JSON.parse(localStorage.getItem("ref-1"));
var Ref2 = JSON.parse(localStorage.getItem("ref-2"));
var Ref3 = JSON.parse(localStorage.getItem("ref-3"));
var Ref4 = JSON.parse(localStorage.getItem("ref-4"));

if(Ref1 == null || Ref2 == null || Ref3 == null || Ref4 == null) {
  localStorage.setItem("ref-1", JSON.stringify(false));
  localStorage.setItem("ref-2", JSON.stringify(false));
  localStorage.setItem("ref-3", JSON.stringify(false));
  localStorage.setItem("ref-4", JSON.stringify(false));
}

if(Ref1) {
  $('#ref-1').prop('checked', true);
}

if(Ref2) {
  $('#ref-2').prop('checked', true);
}

if(Ref3) {
  $('#ref-3').prop('checked', true);
}

if(Ref4) {
  $('#ref-4').prop('checked', true);
}

$('.jsCheckRefs').on('change', function() {
  if($(this).prop('checked')) {
    localStorage.setItem($(this).attr('id'), JSON.stringify(true));
  } else {
    localStorage.setItem($(this).attr('id'), JSON.stringify(false));
  }
})


// Função para direcionar para outro slide
function Slide(target) {
  // Verifica se está dentro do ambiente do Veeva
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