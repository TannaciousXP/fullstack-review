var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number, 
  name: { type: String, unique: true },
  repos: Array
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;