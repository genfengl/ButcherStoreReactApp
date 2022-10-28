require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const Meat = require('./models/meat')

const app = express()
const PORT = process.env.PORT
const dbURL = process.env.MONGODB_URL
// const MongoDBStore = mongoDBSession(session)
// const sessionStore = new MongoDBStore({
//   uri: dbURL,
//   collection: 'sessions'
// })





app.get('/', (req, res) => {
    res.send('Hello World')
})

mongoose.connect(dbURL, (err) => {
  console.log('Connected to db')
  console.log(err)
})

app.listen(PORT, () => {
    console.log('Connected to veneer server on PORT', PORT)
  })



