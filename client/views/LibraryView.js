// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",
  className: 'library',

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Artist</th><th>Song</th><th>Play Count</th><th>Upvotes</th><th>Downvotes</th>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
