// $(document).ready(function () {
(function () {
  var video = new tvp.VideoInfo();
  var isCanPlay = false;
  video.setVid("n03969wggpm");
  window.myplayer = new tvp.Player();
  myplayer.create({
      width:675,
      height:432,
      video:video,
      modId:"mod_player",
      flashWmode: "transparent"
  });
  myplayer.onready = function() {
    isCanPlay = true;
  };
  $('#nav_icon1').show();
  $('#head_nav_a_1').removeClass("head_nav_a").addClass('head_nav_a2');
  $('.palyer_btn').click(function () {
    console.log(isCanPlay);
    if (isCanPlay) {
      $('.player_background').hide();
      myplayer.play();
    }
  })
})()
// })
