const mongoose = require('./connection.js')


const SongSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 },
 writer: {
   type: mongoose.Types.ObjectId,
   ref: 'Writer'
 },
 publisher: {
   type: mongoose.Types.ObjectId,
   ref: 'Publisher'
 }
})

const SongCollection = mongoose.model('Song', SongSchema)


function getAllSongs() {
  return SongCollection
  .find()
  .populate("publisher")
  .populate("writer")
}

function getSong(songId) {
  return SongCollection.findById({_id: songId})
  .populate("publisher")
  .populate("writer")
}

function getSongByWriterId(writerId) {
  return SongCollection.find({writer: writerId})
}

function getSongByPublisherId(publisherId) {
  return SongCollection.find({publisher: publisherId})
}

function addNewSong(newSongObject) {
  return SongCollection.create(newSongObject)
}

function updateSong(songId, updatedSong) {
  return SongCollection.findByIdAndUpdate({_id: songId}, updatedSong)
}

function deleteSong(songId) {
  return SongCollection.findByIdAndDelete({_id: songId})
}


module.exports = {
  getAllSongs,
  getSong,
  getSongByWriterId,
  getSongByPublisherId,
  addNewSong,
  updateSong,
  deleteSong
}
