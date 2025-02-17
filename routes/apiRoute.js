const express = require("express")
const rateLimit = require("../middlewares/rateLimitPlugin")
const {getData} = require("../controllers/getData")

const route = express.Router()

route.get("", rateLimit, getData)

module.exports = route;