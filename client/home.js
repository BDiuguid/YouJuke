Template.home.events(
	{
		"submit #createForm": function(event) {
			var roomName = $('#roomName').val();

			Meteor.call("roomInsert", {name:roomName}, function() {
				Router.go('roomPage', {name:roomName});
			});

			return false;
		}
	}
);
