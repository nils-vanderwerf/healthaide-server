const express = require("express")

const router = express.Router();

// Routes
router.get('/:message', (req, res) => {
    res.status(200).send(`Your message is recieved baby ${req.params.message}`)
})

module.exports = router;