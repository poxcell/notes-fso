

const mongoose = require('mongoose')

if(process.argv.length < 3){
  console.log('Please provide the password as an argument: node mongo.js  <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = 
  `mongodb+srv://fullstack:${password}@cluster0.nolpy.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false, 
  useCreateIndex: true 
})

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)





// ###### create a note
// ######################

// const note = new Note({
//   content: 'Html is easy',
//   date: new Date(),
//   important: true
// })

// note.save().then(resulta => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })



// #######################
// #######3 retrive notes
// #######################



Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})