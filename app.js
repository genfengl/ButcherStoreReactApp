const express = require('express')

const app = express()
const PORT = 3999

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Connected to veneer server on PORT', PORT)
  })