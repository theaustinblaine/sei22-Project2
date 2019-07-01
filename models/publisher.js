const mongoose = require('./connection.js')

const PublisherSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 }
})

const PublisherCollection = mongoose.model('Publisher', PublisherSchema)

function getAllPublishers() {
  return PublisherCollection.find()
}

function getPublisher(publisherId) {
  return PublisherCollection.findById(publisherId)
}

function addNewPublisher(newPublisherObject) {
  return PublisherCollection.create(newPublisherObject)
}

function updatePublisher(publisherId) {
  return PublisherCollection.findByIdAndUpdate(publisherId)
}

function deletePublisher(publisherId) {
  return PublisherCollection.findByIdAndDelete(publisherId)
}


module.exports = {
  getAllPublishers,
  getPublisher,
  addNewPublisher,
  updatePublisher,
  deletePublisher
}
