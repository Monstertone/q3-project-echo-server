const songs = require("../controllers/songs.js")

module.exports = function(app){

  app.get('/songs', songs.main);

  app.patch('/songs/add/:id', songs.add);

  app.patch('/songs/remove/:id', songs.remove);

}
