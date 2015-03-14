Template.videoPlayer.events({
  "click #play": function (event) {
    playVideo(this);
  }
});

function playVideo (data) {
  var item;
  var player;
  onYouTubeIframeAPIReady = function () {
    item = data.queueItem[0];
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: data.queueItem[0].videoId,
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
  };

  YT.load();

  // autoplay video
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // when video ends
  function onPlayerStateChange(event) {

    if(event.data === 0) {
      shiftQueue();
      player.loadVideoById(data.queueItem[0].videoId);
      item = data.queueItem[0];
    }
  }

  function shiftQueue() {
    if (item === data.queueItem[0]) {
      data.queueItem.shift();
      Rooms.update(data._id, data);
    }
  }
}
