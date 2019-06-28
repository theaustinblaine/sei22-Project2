const express = require('express')

const writerApi = require('../models/writer.js')

const writerRouter = express.Router()


writerRouter.get('/', (req, res) => {
  writerApi.getAllWriters()
    .then((writer) => {
      res.render('writers/writers', {writer})
    })
})

writerRouter.get('/new', (req, res) => {
  res.render('writers/newWriterForm')
})


module.exports = {
  writerRouter
}
