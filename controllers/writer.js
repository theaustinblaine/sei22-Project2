const express = require('express')

const writerApi = require('../models/writer.js')

const writerRouter = express.Router()


writerRouter.get('/', (req, res) => {
  writerApi.getAllWriters()
    .then((writers) => {
      res.render('writers/writers', {writers})
    })
    .catch((err) => {
      res.send(err)
    })
})

writerRouter.get('/new', (req, res) => {
  res.render('writers/newWriterForm')
})

writerRouter.get('/:writerId', (req, res) => {
  writerApi.getWriter(req.params.writerId)
    .then((writer) => {
      res.render('writers/singleWriter', {writer})
    })
})

writerRouter.post('/', (req, res) => {
  writerApi.addNewWriter(req.body)
    .then(() => {
      res.redirect('/writers')
    })
    .catch((err) => {
      res.send(err)
    })
})


module.exports = {
  writerRouter
}
