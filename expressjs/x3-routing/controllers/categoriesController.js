

const getAllCategories = (req, res) => {
    res.json({categories: "all"})
}

const getSingleCategory = (req, res) => {
    res.json({cat: req.params.cat})

}

module.exports = {
    getAllCategories,
    getSingleCategory
}