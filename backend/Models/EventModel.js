const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    name: String,
    location: String,
    summary: String,
    date: Date,
    imgUrl: String
})

const EventModel = mongoose.model("Event", eventSchema)

module.exports = EventModel;