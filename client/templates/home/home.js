Template.home.events(
	{
		"submit #createForm": function(event) {
			var roomName = $('#roomName').val();

			Meteor.call("roomInsert", {name:roomName}, function() {
				Router.go('room', {name:roomName});
			});

			return false;
		}
	}
);
