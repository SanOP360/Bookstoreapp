const express = require("express");
const router = express.Router();
const { getBook } = require("../controller/book.controller");

router.get("/", getBook);

module.exports = router;
