const mongoose = require('./connection.js')

const WriterSchema = new mongoose.Schema({
 name: String
})

const WriterCollection = mongoose.model('Writer', WriterSchema)

function getAllWriters() {
  return WriterCollection.find()
}

function getWriter(writerId) {
  return WriterCollection.findById(writerId)
}

function addNewWriter(writerObject) {
  return WriterCollection.create(writerObject)
}

function updateWriter(writerId, newWriterObject) {
  return WriterCollection.findByIdAndUpdate(writerId, newWriterObject)
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
