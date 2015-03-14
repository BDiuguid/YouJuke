Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('notifications')];
  }
});

Router.route('/', {
  name: 'home'
});

Router.route('/posts/:name', {
  name: 'roomPage',
  waitOn: function() {
    return [
      Meteor.subscribe('singleRoom', this.params.name),
    ];
  },
  data: function() { return Posts.findOne(this.params.name); }
});
