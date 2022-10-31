const express = require('express')
const Meat = require('../models/meat')
const upload = require('../middlewares/upload')
const router = express.Router()


//Index Page
router.get('/api/butcher', async (req, res) => {
    const meats = await Meat.find()
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
    console.log(meat)
    meat = await Meat.create(meat)
    res.json(meat)
  })

// PUT Request / Update Meat
  router.put('/api/butcher/edit/:id', upload.single('image'), async (req, res) => {
    let meats = await Meat.findById(req.params.id)
    console.log(req.body)
    req.params.imageURL = req.file?.path

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