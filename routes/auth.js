const express = require("express");
import { currentUser } from "../controllers/auth";

const router = express.Router();

// Routes
router.post('/current-user', currentUser)

module.exports = router;