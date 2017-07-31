




(function () {
  $('.head_nav').delegate('a','hover',function (e) {
    var idName = $(this).attr('id');
    if(idName === name){
      return false
    }
    $(this).toggleClass('head_nav_a').toggleClass('head_nav_a2');
    $(this).children('.nav_icon').toggle();
  });
  $('.head_nav_li6').hover(function () {
    $('.head_nav_li6tabwrap').show();
  },function () {
    $('.head_nav_li6tabwrap').hide();
  })
  $('.head_nav_li6tabwrap').hover(function () {
    $('.head_nav_li6tabwrap').show()
  },function () {
    $('.head_nav_li6tabwrap').hide()
  })
})()
