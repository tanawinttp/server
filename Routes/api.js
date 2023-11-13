const express = require("express");
const router = express.Router();

const { read } = require("../Controllers/Api");

router.get("/read", read);

module.exports = router;
