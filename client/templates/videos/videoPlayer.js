Template.videoPlayer.events({
  "click .play": function (event) {
    playVideo(this);
  }
});

function playVideo (data) {
  var player;
  onYouTubeIframeAPIReady = function () {
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
    }
  }
  
  function shiftQueue() {
    data.queueItem.shift();
    Rooms.update(data._id, data);
  }
}
