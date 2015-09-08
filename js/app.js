// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation(
  $('.nav-toggle').click(function () {
    $('.wrapper').toggleClass('open');
    $('.off-nav').toggleClass('is-open');
    $('#hamburger').toggleClass('open');
  })
);

$('.clickOnLink').on("click", function (e) {
  $('a').each(function () {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    }
  });

  $(this).toggleClass('selected');
});