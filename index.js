const express = require("express");
const route = require("./routes/apiRoute")

const app = express()
const PORT = 3000

app.use("/api", route)

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
