
const mongoose = require("mongoose")
const TodoSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

const Todo = mongoose.model("Todo", TodoSchema)
module.exports=Todo