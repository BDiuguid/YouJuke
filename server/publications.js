Meteor.publish('singleRoom', function(name) {
  check(name, String);
  return Rooms.findOne({name: name});
});
