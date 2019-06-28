const express = require('express')

const songApi = require('../models/song.js')

const songRouter = express.Router()


songRouter.get('/', (req, res) => {
  songApi.getAllSongs()
    .then((songs) => {
      res.render('songs/songs', {songs})
    })
    .catch((err) => {
      res.send(err)
    })
})

songRouter.get('/new', (req, res) => {
  res.render('songs/newSongForm')
})

songRouter.get('/:songId', (req, res) => {
  songApi.getSong(req.params.songId)
    .then((song) => {
      res.render('songs/singleSong', {song})
    })
})

songRouter.post('/', (req, res) => {
  songApi.addNewSong(req.body)
    .then(() => {
      res.redirect('/songs')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = {
  songRouter
}
