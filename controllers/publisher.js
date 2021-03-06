const express = require('express')

const publisherApi = require('../models/publisher.js')
const songApi = require('../models/song.js')
const writerApi = require('../models/writer.js')

const publisherRouter = express.Router()


publisherRouter.get('/', (req, res) => {
  publisherApi.getAllPublishers()
    .then((publishers) => {
      res.render('publishers/publishers', {publishers})
    })
    .catch((err) => {
      res.send(err)
    })
})

publisherRouter.get('/new', (req, res) => {
  res.render('publishers/newPublisherForm')
})

publisherRouter.get('/:publisherId', (req, res) => {
  publisherApi.getPublisher(req.params.publisherId)
    .then((publisher) => {
      songApi.getSongByPublisherId(publisher._id)
        .then((song) => {
          res.render('publishers/singlePublisher', {publisher, song})
        })
    })
    .catch((err) => {
      res.send(err)
    })
})

publisherRouter.post('/', (req, res) => {
  publisherApi.addNewPublisher(req.body)
    .then(() => {
      res.redirect('/publishers')
    })
    .catch((err) => {
      res.send(err)
    })
})

publisherRouter.delete('/:publisherId', (req, res) => {
  publisherApi.deletePublisher(req.params.publisherId)
    .then(() => {
      res.redirect('/publishers')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = {
  publisherRouter
}
