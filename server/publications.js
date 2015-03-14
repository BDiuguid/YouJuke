Meteor.publish('singleRoom', function(name) {
  check(name, String);
  return Rooms.find({name: name});
});
