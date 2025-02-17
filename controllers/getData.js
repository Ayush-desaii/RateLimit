const getData = (req, res) => {
    console.log(req.ip)
    res.send("hey there, welcome")
}

module.exports = { getData }