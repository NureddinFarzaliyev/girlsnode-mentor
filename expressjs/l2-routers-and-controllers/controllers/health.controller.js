const getHealth = (req, res) => {
    const response = {
        status: 200,
        message: "All Okay"
    }

    res.status(200).json(response)
}

module.exports = {
    getHealth
}