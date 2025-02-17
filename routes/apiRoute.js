const express = require("express")
const rateLimitPlugin = require("../middlewares/rateLimitPlugin")
const {rateLimit} = require("../middlewares/rateLimit")
const {getData} = require("../controllers/getData")

const route = express.Router()

route.get("", rateLimit, getData)
route.get("/plugin", rateLimitPlugin, getData)

module.exports = route;