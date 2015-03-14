Template.home.events(
	{
		"click #submit_creation": function(event) {
			var room_name = $('#room_name').val();
			
			Meteor.call("roomInsert", {name:room_name});
		}
	}
)
