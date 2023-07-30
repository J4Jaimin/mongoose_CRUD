const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true,
        min: 10,
        max: 200
    }
});

module.exports = mongoose.model("Fruit", fruitSchema);