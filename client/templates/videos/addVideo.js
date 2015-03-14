Template.addVideo.events({
  "submit .search-youtube": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;
    var key = "AIzaSyBVOg3HnF5rPSjeIqqRln0RisfY06p_JqQ"; // any
    //var key = "AIzaSyA8fMBylBvF3qDHx_JtHT5GJn3UckC2aPs"; //server

    HTTP.call("GET",
           "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + text + "&type=video&key=" + key,
           function (error, result) {
             if(error) {
              console.log('ERROR from YouTube:');
              console.log(error);
             } else {
               console.log(result.data.items);
               Session.set("searchResults", result.data.items);
             }
           });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  },
  "click .addVideoClick": function(event, Template) {
    var formattedVideo = {
      videoTitle: this.snippet.title,
      videoId: this.id.videoId
    };
    
    if (!Template.data.queueItem)
      Template.data.queueItem = [];
    Template.data.queueItem.push(formattedVideo);

    Rooms.update(Template.data._id, Template.data);

    Router.go('roomPage', Template.data);
  }
});

Template.addVideo.helpers({
  results: function() {
    return Session.get("searchResults");
  }
});
