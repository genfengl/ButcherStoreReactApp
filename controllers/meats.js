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
  // default sort by price in ascending order
    const meats = await Meat.find().sort({price: 1})
    res.json(meats)
})


//STRIPE payment Route
router.post('/api/butcher/checkout', async (req, res) => {
  console.log(req.body)
  const toCent = amount => {
    const str = amount.toString()
    const [int] = str.split('.')
  
    return Number(amount.toFixed(2).replace('.', '').padEnd(int.length === 1 ? 3 : 4, '0'))
  }
  try {
    const items = req.body.items[0].items

    //initialising stripe with session below
    const session = await stripe.checkout.sessions.create({
      line_items: items.map((item) => {
        console.log(item)
       return {
          price_data: {
            currency: 'aud',
            product_data: {
              name: item.name,
            },
            unit_amount: toCent(item.price),
          },
          quantity: item.quantity,
        }
        
    }), 
      mode: 'payment',
      success_url: 'http://localhost:3000/butcher/success',
      cancel_url: 'http://localhost:3000/butcher'
    })
    //sends back the session in which stripe has created - url for user to be redirected to to make payment
    
    res.json({url: session.url})
  
  } catch(e) {
    res.status(500).json({ error: e.message })
    console.log(e)
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
    return like?.toString() === req.user.id
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