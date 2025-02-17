const expressLimit = require("express-rate-limit")

const rateLimitPlugin = expressLimit({
    windowMs: 60*1000,
    max: 5,
    handler: (req, res) => {
        res.status(429).json({error:"limit over, try again later"})
    }
})

module.exports = rateLimitPlugin;