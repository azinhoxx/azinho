let $topNubex = $("#topNubex");
$('#topNubex').hide();

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 200) {
      $('#topNubex').fadeIn();
    } else {
      $('#topNubex').fadeOut();
    }
  });
  $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},50);
  });
});
