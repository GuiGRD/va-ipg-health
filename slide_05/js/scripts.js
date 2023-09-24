let r1 = '1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dol.';
let r2 = '2. Magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';
let r3 = '3. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua vero eos.';
let r4 = '4. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dol.';
let email = localStorage.getItem("email");

let step = 1;

function setStep(step) {
  $('main').removeClass('stp-1');
  $('main').removeClass('stp-2');
  $('main').removeClass('stp-3');

  $('main').addClass('stp-' + step);

  $('.cart').hide();

  $('.cart.step-' + step).show();

  if(step == 3) {
    if (typeof Veeva !== 'undefined') {
      com.veeva.clm.launchApprovedEmail(123);
    } else {
      window.location.href = 'mailto:' + email + '?subject=VA FCB Brazil - Estudos&body=' +
      ($('#ref-cart-1').prop('checked') ? r1 + '%0D%0A%0D%0A' : '') +
      ($('#ref-cart-2').prop('checked') ? r2 + '%0D%0A%0D%0A' : '') +
      ($('#ref-cart-3').prop('checked') ? r3 + '%0D%0A%0D%0A' : '') +
      ($('#ref-cart-4').prop('checked') ? r4 + '%0D%0A%0D%0A' : '');
    }
  }
}

setStep(step);


if(!Ref1) {
  $('#ref-cart-1').parent().hide();
  $('#ref-cart-1').prop('checked', false);
}

if(!Ref2) {
  $('#ref-cart-2').parent().hide();
  $('#ref-cart-2').prop('checked', false);
}

if(!Ref3) {
  $('#ref-cart-3').parent().hide();
  $('#ref-cart-3').prop('checked', false);
}

if(!Ref4) {
  $('#ref-cart-4').parent().hide();
  $('#ref-cart-4').prop('checked', false);
}

$('.jsBtnNext').on('click', function() {
  if(step < 3) {
    step++;
    setStep(step);
  }
});

$('.jsBtnPrev').on('click', function() {
  if(step > 1) {
    step--;
    setStep(step);
  } else {
    Slide('slide_02');
  }
});

$('#uncheck').on('change', function() {
  if ($(this).prop('checked')) {
    $('.check.ref').prop('checked', false);
  }
})

$('.check.ref').on('change', function() {
  if ($(this).prop('checked')) {
    $('#uncheck').prop('checked', false);
  }
})