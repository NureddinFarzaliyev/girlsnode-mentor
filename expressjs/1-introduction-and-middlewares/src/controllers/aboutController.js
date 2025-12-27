const aboutController =(req, res) => {
    res.status(200).send(req.extraMessage)
} 

module.exports = {aboutController}