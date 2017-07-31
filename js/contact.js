(function () {
    $('#nav_icon7').show();
    $('#head_nav_a_7').removeClass("head_nav_a").addClass('head_nav_a2');
    $('[role=tip]').hover(function () {
      var btnLeft = $('[role=tip]').offset().left;
      var btnWidht = $('[role=tip]').width();
      var sWidth = $(window).width();
      var tipBox = $('[role=tipbox]').width();
      if(btnLeft + btnWidht + tipBox < sWidth){
        $('[role=tipbox]').show().css('left','17px');
      }else {
        $('[role=tipbox]').show().css('left','-230px');
      }
    },function () {
      $('[role=tipbox]').hide();
    })
    function open() {
      $('[role=btnbox]').show();
    }
    function close() {
      $('[role=btnbox]').hide();
    }
    $('[role=refer]').click(open)
    $('[role=btnconfirm]').click(close)
})()
