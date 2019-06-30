const mongoose = require('./connection.js')

const WriterSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 }
})

const WriterCollection = mongoose.model('Writer', WriterSchema)

function getAllWriters() {
  return WriterCollection.find()
}

function getWriter(writerId) {
  return WriterCollection.findById(writerId)
}

function addNewWriter(newWriterObject) {
  return WriterCollection.create(newWriterObject)
}

function updateWriter(writerId, updatedWriterObject) {
  return WriterCollection.findByIdAndUpdate(writerId, updatedWriterObject)
}

function deleteWriter(writerId) {
  return WriterCollection.findByIdAndDelete(writerId)
}


module.exports = {
  getAllWriters,
  getWriter,
  addNewWriter,
  updateWriter,
  deleteWriter
}
