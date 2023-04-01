const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const TodoModel = require("./models/Todo")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gulafshaahmed:<your-input>@cluster0.ojgxwxu.mongodb.net/<database-name>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

app.get("/read", async (req, res) => {
    try {
        const items = await TodoModel.find({});
        res.send(items);
    } catch (err) {
        res.send(err);
    }
});

app.post("/insert", async (req, res) => {
    const itemContent = req.body.item
    const todo = new TodoModel({ item: itemContent });
    try {
        await todo.save()
        res.send("added!")
    } catch (err) {
        console.log(err)
    }
})
app.delete("/delete/:id", async (req, res) => {
    const idToDelete = req.params.id;
    await TodoModel.findByIdAndRemove(idToDelete).exec();
})


app.listen(3001, () => {
    console.log("Port running on 3001");
})
