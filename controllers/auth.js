const { json } = require('express')
const express = require('express')
const passport = require('passport')
const User = require('../models/user')
const router = express.Router()



const authenticate = (req, res, next) => {
    const auth = passport.authenticate('local', (err, user, info) => {
      if (err) next(err)
      if (!user) res.status(401).json({ msg: 'Wrong username or password '})
      req.logIn(user, (err) => {
        if (err) next(err)
        next()
      })
    })
    auth(req, res, next)
  }

    router.post('/login', authenticate, (req, res) => {
        console.log('logged in', req.user.username)
        const { id, username } = req.user
        res.json({ id, username })     
})

    router.post('/register', async (req, res) => {
        const { username, password } = req.body
            // User.findOne({ username: username }).then((user) => {
            //     if (user) {
            //         return res.status(400).json({ msg: 'Username is already registered '})
            //     }
            // })
            try {
                const newUser = await User.register(
                new User({ 
                    username: username,
                }), password
                )
                newUser.save()
                return res.status(200).json({ msg: newUser })
            } catch (err) {
                res.status(401).json({
                    message: 'User not created',
                    error: err.message
                })
            }
})
    

    router.post('/logout', (req, res) => {
        req.logout(() => {
            res.json({
                msg: 'Logged out'
            })
        })
    })

    module.exports = router 