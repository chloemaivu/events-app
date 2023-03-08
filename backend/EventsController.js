const createError = require('http-errors')
const EventModel = require('./Models/EventModel');

exports.index = async function (req, res) {
    try {
        const events = await EventModel.find({});
        res.send(events);
    } catch (error) {
        res.status(500).send({ error: 'Something went wrong' });
    }
}

exports.create = async function (req, res, next) {
    const request = req.body;

    if (!request.name) return (next(createError(400, "Name is required.")))
    if (!request.location) return (next(createError(400, "Location is required.")))
    if (!request.summary) return (next(createError(400, "Summary is required.")))
    if (!request.date) return (next(createError(400, "Date is required.")))

    const eventInstance = new EventModel({
        name: request.name,
        location: request.location,
        summary: request.summary,
        date: request.date
    });

    try {
        eventInstance.save();
    } catch (error) {
        console.log(error);
    }

    res.send(eventInstance);
}


exports.show = async function (req, res, next) {
    const eventId = req.params.id;

    try {
        const event = await EventModel.findById(eventId, req.body, { new: true });
        return res.send(event);
    } catch (error) {
        return next(createError(500, "Error finding event."));
    }
}

exports.delete = async function (req, res, next) {
    const eventId = req.params.id;

    try {
        await EventModel.findByIdAndDelete(eventId, req.body, { new: true });
        return res.send({ result: true });
    } catch (error) {
        return next(createError(500, "Error deleting event"));
    }
}

exports.update = async function (req, res, next) {
    if (!req.body.name) {
        return (next(createError(400, "Name is required.")))
    }

    try {
        const eventId = req.params.id;
        const event = await EventModel.findByIdAndUpdate(eventId, req.body, { new: true });
        if (!event) {
            return next(createError(404, 'Event not found'));
        }
        console.log('Event updated:', event);
        res.send(event);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Something went wrong' });
    }
}