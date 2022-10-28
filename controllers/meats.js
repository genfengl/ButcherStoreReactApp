const express = require('express')
const Meat = require('../models/meat')
const upload = require('../middlewares/upload')
const router = express.Router()


//Index Page
router.get('/api/butcher', async (req, res) => {
    const meats = await Meat.find()
    res.json(meats)
})


//Show Page
router.get('/api/butcher/:id', async (req, res) => {
    let meats = await Meat.findById(req.params.id)
    res.json(meats)
})

router.put('/api/butcher/:id', upload.single('image'), async (req, res) => {
    let meats = await Meat.findById(req.params.id)

    req.params.imageURL = req.file?.path

    meats = await Meat.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.json(meats)

})


router.post('/api/butcher', upload.single('image'), async (req, res) => {
  
    let meat = {
      ...req.body,
      imageURL: req.file?.path,
    }
    console.log(meat)
    meat = await Meat.create(meat)
    res.json(meat)
  })


module.exports = router