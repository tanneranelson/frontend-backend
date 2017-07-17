const express = require('express')
const router = express.Router()

router.get('/game', function (req, res) {
    res.render('game', {
      loggedInUser: req.user
    })
  })

module.exports = router
