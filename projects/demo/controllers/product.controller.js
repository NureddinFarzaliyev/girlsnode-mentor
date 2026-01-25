
const getProducts = (req, res) => {
    res.send("test")
}

const deleteProduct = (req, res) => { 
    res.send("delete product")
}

module.exports = {
    getProducts,
    deleteProduct
}