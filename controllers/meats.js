const express = require('express')
const Meat = require('../models/meat')
const upload = require('../middlewares/upload')
const { Router } = require('express')
const router = express.Router()


//Index Page
router.get('/api/butcher', async (req, res) => {
  // console.log(req.user)
    const meats = await Meat.find()
    res.json(meats)
})


//Search Route
router.get('/api/butcher/search/', async (req, res) => {
  console.log(req.user)
  const { query } = req.query
  let meats
  if ( query ) {
    // using .aggregate to use the text search function from mongoDB atlas
    meats = await Meat.aggregate(
      [
        {
          "$search": {
            "index": "default",
            "text": {
              "query": query,
              "path": {
                "wildcard": "*"
              }
            }
          }
        }
      ]
    )
  } else {
    meats = await Meat.find()
  }
  res.json(meats)
})

//Show Page - Display individual Meat
router.get('/api/butcher/:id', async (req, res) => {
    let meats = await Meat.findById(req.params.id)
    res.json(meats)
})


// POST Request / Create new Meat
router.post('/api/butcher', upload.single('image'), async (req, res) => {
    let meat = {
      ...req.body,
      imageURL: req.file?.path,
    }
    meat = await Meat.create(meat)
    res.json(meat)
  })



// PUT Request / like product
router.put('/api/butcher/like/:id', async (req, res) => {
  let meats = await Meat.findById(req.params.id)
  console.log(meats)
  const likesIndex = meats.likes.findIndex((like) => {
    return like.toString() === req.user.id
  })
  if (likesIndex >= 0) {
    meats.likes.splice(likesIndex, 1)
  } else {
    meats.likes.push(req.user)
  }
  await meats.save()
  res.json(meats)

})



// PUT Request / Update Meat
  router.put('/api/butcher/edit/:id', upload.single('image'), async (req, res) => {
    let meats = await Meat.findById(req.params.id)
    req.body.imageURL = req.file?.path

    meats = await Meat.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.json(meats)

})
// DELETE Request / Delete Meat
  router.delete('/api/butcher/:id', async (req, res) => {
    let meats = await Meat.findById(req.params.id)
    meats = await meats.remove()
    res.json(meats)
  })




module.exports = router