// Require mongoose
var mongoose = require('mongoose');
// Create Schema class
var Schema = mongoose.Schema;
// create the Article Schema
var ArticleSchema = new Schema({
  // Title require
  title: {
    type: String,
    required: true
  },
  // date require
  date: {
    type: Date,
    required: true
  },
  // url require
  url: {
    type: String,
    required: true
  }
});
// create Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);
// Export Model
module.exports = Article;