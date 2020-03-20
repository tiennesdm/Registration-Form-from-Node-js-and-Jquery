const express = require("express");
console.log("hello from routes");

const ShortController = require("../../controller/registerController");

const router = express.Router();

//router.get("/", ShortController.getUrl);

router.post("/postUrl", ShortController.postUrl);

module.exports = router;
