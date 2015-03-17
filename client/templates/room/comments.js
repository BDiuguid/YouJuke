Template.comments.events({
  "click #aliasSubmit": function(event) {
    var name = $('#aliasText').val();

    Session.set('aliasName', name);
    return;
  },
  "click #sendComment": function(event) {
    if(!this.comment) {
      this.comment = [];
    }
    this.comment.push({author: Session.get('aliasName'), content: $('#commentText').val() });

    Rooms.update(this._id, this);
  }
});

Template.comments.helpers({
  alias: function() {
    return Session.get('aliasName');
  }
});
