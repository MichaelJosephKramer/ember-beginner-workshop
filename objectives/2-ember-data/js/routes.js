App.Router.map(function() {
  this.resource('stories', function() {
  });
});

App.StoriesIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get("store").findAll("story");
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(params) {
    this.transitionTo("stories");
  }
});
