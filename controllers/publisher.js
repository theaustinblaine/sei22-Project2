const express = require('express')

const publisherApi = require('../models/publisher.js')

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


module.exports = {
  publisherRouter
}
