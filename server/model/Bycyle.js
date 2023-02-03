const mongoose = require("mongoose")
const bycyleSchema = new mongoose.Schema({
    owner: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("Bycyle", bycyleSchema)