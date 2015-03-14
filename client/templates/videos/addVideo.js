Template.addVideo.events({
  "submit .search-youtube": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    Meteor.call('searchVideo', text);

    console.log(text);
    // Meteor.HTTP.get() goes here...

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});

Template.addVideo.helpers({
  results: function() {
    return Session.get("search-results");
  }
});
