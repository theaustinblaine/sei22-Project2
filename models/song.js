const mongoose = require('./connection.js')


const SongSchema = new mongoose.Schema({
 name: String,
 writer: String,
 publisher: String
})

const SongCollection = mongoose.model('Song', SongSchema)


function getAllSongs() {
  return SongCollection.find()
}

function getSong(songId) {
  return SongCollection.findById({_id: songId})
}

function addNewSong(newSongObject) {
  return SongCollection.create(newSongObject)
}

function updateSong(songId, updatedSong) {
  return SongCollection.findByIdAndUpdate({_id: songId}, updatedSong)
}

function deleteSong(songId) {
  return SongCollection.findOneAndDelete({_id: songId})
}


module.exports = {
  getAllSongs,
  getSong,
  addNewSong,
  updateSong,
  deleteSong
}
