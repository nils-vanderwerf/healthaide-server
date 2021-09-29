console.log("=====> NODE SERVER", process.version)
const express = require('express')
const app = express()
require("dotenv").config();

// Request, response
app.get('/api/:message', (req, res) => {
    res.status(200).send(`Your message is recieved ${req.params.message}`)
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));