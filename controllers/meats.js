require('dotenv').config()

const express = require('express')
const Meat = require('../models/meat')
const upload = require('../middlewares/upload')
const { Router } = require('express')
const { default: Stripe } = require('stripe')
const router = express.Router()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


//Index Page
router.get('/api/butcher', async (req, res) => {
  // console.log(req.user)
    const meats = await Meat.find()
    res.json(meats)
})


//STRIPE payment Route
router.post('/api/butcher/checkout', async (req, res) => {
  try {
    const items = req.body.items
  // console.log(req.body)
    let lineItems = []
    //Stripe requires stricked formatting - only ID and Qty / pushing only these properties from cart items and sending to stripe
    // console.log(items)
    items.forEach((item) => {
      
      lineItems.push(
        {
          //price is flagging error
          price: item.price,
          quantity: item.quantity
        }
      )
    })

    //initialising stripe with session below
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    })
    //sends back the session in which stripe has created - url for user to be redirected to to make payment
    
    res.json(JSON.stringify({
      url: session.url
    }))
  } catch(e) {
    res.status(500).json({ error: e.message })
  }
  // res.json(lineItems)
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