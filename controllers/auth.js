const { json } = require('express')
const express = require('express')
const passport = require('passport')
const User = require('../models/user')
const router = express.Router()


    router.post('/login', passport.authenticate('local'), (req, res) => {
        console.log(req.body)
        console.log('logged in', req.user.username)
        const { id, username } = req.user
        res.json({ id, username })
        
    })

    router.post('/register', async (req, res) => {
        console.log(req.body)
        const { username, password } = req.body
        
        User.findOne({ username: username }).then((user) => {
            if (user) {
                return res.status(400).json({ msg: "User already registered" })
            } else {
                const newUser = new User({ 
                    username: username,
                    password: password,
                })
                newUser.save()
                return res.status(200).json({ msg: newUser })
            }
        })

    })


    router.post('/logout', (req, res) => {
        req.logout(() => {
            res.json({
                msg: 'Logged out'
            })
        })
    })

    module.exports = router 