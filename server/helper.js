youtubeApi.authenticate({
    type: 'key',
    key: ''
});

Meteor.methods({
  searchVideo: function(text) {
    youtubeApi.search.list({
      part: "id",
      type: "video",
      maxResults: 5,
      q: text
    }, function(err, data) {
      console.log('ERR:');
      console.log(err);
      console.log("data:");
      console.log(data);
    });
  }
});
