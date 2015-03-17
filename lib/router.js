Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  // waitOn: function() {
  //   return [Meteor.subscribe('')];
  // }
});

Router.route('/', {
  name: 'home'
});

Router.route('/rooms/:name', {
  name: 'room',
  waitOn: function() {
    return [
      Meteor.subscribe('singleRoom', this.params.name),
    ];
  },
  data: function() { return Rooms.findOne({name: this.params.name}); }
});

Router.route('/rooms/:name/add', {
  name: 'addVideo',
  waitOn: function() {
    return [
      Meteor.subscribe('singleRoom', this.params.name),
    ];
  },
  data: function() { return Rooms.findOne({name: this.params.name}); }
});
