const {default: mongoose} = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected to MongoDB")
    } catch (error) {
        console.error("Failed to connect to MongoDB", error)
    }
}

module.exports = connectDB