const helloController = (req, res) => {
    res.status(200).send("hello express")
}

module.exports = { helloController}