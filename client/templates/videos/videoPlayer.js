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
        height: '300',
        width: '100%',
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
      var room = Rooms.findOne({_id: data._id});
      shiftQueue(room);
      player.loadVideoById(room.queueItem[0].videoId);
      item = room.queueItem[0];
    }
  }

  function shiftQueue(room) {
    if (item.videoId === room.queueItem[0].videoId) {
      room.queueItem.shift();
      Rooms.update(data._id, room);
    }
  }
}
