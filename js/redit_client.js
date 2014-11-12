var ReditItem = Backbone.Model.extend({
  parse: function(data){
    return _.pick(data, 
      'subreddit', 
      'title', 
      'url',
      'thumbnail');
  }
});

var ReditClient = Backbone.Collection.extend({
  
  model: ReditItem,

  url: 'http://api.reddit.com/', 
  
  findBy: function(topic) {
    return this.where({subreddit: topic});
  },

  topics: function() {
    return _.uniq(this.models.map(function(m) { return m.get('subreddit')}));
  },

  parse: function(data) {
    return data.data.children.map( function (item) {
      return item.data;
    });
  }
});