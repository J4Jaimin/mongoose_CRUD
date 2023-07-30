const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 60
    },
    hobby: {
        type: String
    },
    favouriteFruit: fruitSchema
}
); 

module.exports = mongoose.model("Person", PersonSchema);