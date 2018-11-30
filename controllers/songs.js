const knex = require('../db/knex.js');

module.exports = {
  main: (req, res)=> {
    knex('songs').then((results)=>{
      res.json(results);
    })
  },

  add:(req,res)=>{
    knex('songs').where('id', req.params.id)
    .update({
      inList: true
    }, '*')

     .then((song) => {
      res.json(song[0])
    })

  },

  remove:(req,res)=> {
    knex('songs').where('id', req.params.id)
    .update({
      inList: false
    }, '*')

    .then((song) => {
     res.json(song[0])
   })
  }
}
