const express = require("express");
import { showMessage } from "../controllers/auth";

const router = express.Router();

// Routes
router.get('/:message', showMessage)

module.exports = router;