const express = require("express");
import { currentUser } from "../controllers/auth";

const router = express.Router();

// Routes
router.get('/current-user', currentUser)

module.exports = router;