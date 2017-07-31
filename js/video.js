
(function () {
  var video = new tvp.VideoInfo();
  var isCanPlay = false;
  video.setVid("");
  window.myplayer = new tvp.Player();
  myplayer.create({
      width:1000,
      height:472,
      video:video,
      modId:"video-play-area",
      flashWmode: "transparent"
  });
  myplayer.onready = function() {
    isCanPlay = true;
  };
  $('#nav_icon5').show();
  $('#head_nav_a_5').removeClass("head_nav_a").addClass('head_nav_a2');;
  $('.video-palyer_btn').click(function () {
    console.log(isCanPlay);
    if (isCanPlay) {
      $('.video-player_background').hide();
      myplayer.play();
    }
  })
})()
