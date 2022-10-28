const express = require('express')
const passport = require('passport')
const router = express.Router()


    router.post('/login', passport.authenticate('local'), (req, res) => {
        console.log('logged in', req.user.username)
        const { id, username } = req.user
        res.json({ id, username })
        
    })


    router.post('/logout', (req, res) => {
        req.logout(() => {
            res.json({
                msg: 'Logged out'
            })
        })
    })

    module.exports = router 