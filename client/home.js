Template.home.events(
	{
		"click #submit_creation": function(event) {
			var roomName = $('#room_name').val();

			Meteor.call("roomInsert", {name:roomName}, function() {
				Router.go('roomPage', {name:roomName});
			});
		}
	}
);

Template.home.helpers({
	createButtonAttrs: function() {
		return {
			raised: true
		}
	}
});
