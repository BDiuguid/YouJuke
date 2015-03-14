Rooms = new Mongo.Collection('rooms');



/*
room = {
  name: String,
  pin: Number,
  queueItem: [String], // YouTubeVideoID?
  comment: [{
    author: String, // Session Alias
    content: String
  }]
}


*/







validateRoom = function (room) {
  var errors = {};

  if (!room.name)
    errors.name = "Please fill in a name";

  if (room.pin) {
      check(room.pin, String);
      if( room.pin.length !== 4 || isNaN( parseInt(room.pin) ) ) {
          errors.pin = "Please input a four digit number";
      }
  }

  return errors;
};

Meteor.methods({
  roomInsert: function(roomAttributes) {
    check(roomAttributes, {
      name: String,
      pin: Match.Optional(Number),
      queueItem: Match.Optional([{videoTitle: String}]), // YouTubeVideoID?
      comment: Match.Optional([{
        author: String, // Session Alias
        content: String
      }])
    });

    var errors = validateRoom(roomAttributes);
    if (errors.name || errors.pin)
      throw new Meteor.Error('invalid-room', "You must set a name and a four digit pin is optional for your room!");

    var roomWithSameName = Rooms.findOne({name: roomAttributes.name});
    if (roomWithSameName) {
      throw new Meteor.Error('invalid-room', "This name is already taken");
    }

    // watching view, queueing view, or everyone watch at same time?

    var roomId = Rooms.insert(roomAttributes);

    return {
      _id: roomId
    };
  },
});
