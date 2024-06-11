const express = require("express");
const router = express.Router();
const { postSearch, getSearches } = require("../controllers/search.controller");

router.get("/search", getSearches);
router.post("/search", postSearch);

module.exports = router;
