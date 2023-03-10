const createError = require("http-errors");
const EventModel = require("./Models/EventModel");

exports.index = async function (req, res) {
  try {
    const events = await EventModel.find({});
    res.send(events);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.create = async function (req, res, next) {
  const request = req.body;

  if (!request.name) return next(createError(400, "Name is required."));
  if (!request.location) return next(createError(400, "Location is required."));
  if (!request.summary) return next(createError(400, "Summary is required."));
  if (!request.date) return next(createError(400, "Date is required."));
  if (!request.imgUrl) return next(createError(400, "Image URL is required."));

  const eventInstance = new EventModel({
    name: request.name,
    location: request.location,
    summary: request.summary,
    date: request.date,
    imgUrl: request.imgUrl
  });

  try {
    eventInstance.save();
  } catch (error) {
    console.log(error);
  }

  res.send(eventInstance);
};

exports.show = async function (req, res, next) {
  const eventId = req.params.id;

  try {
    const event = await EventModel.findById(eventId, req.body, { new: true });
    return res.send(event);
  } catch (error) {
    return next(createError(500, "Error finding event."));
  }
};

exports.delete = async function (req, res, next) {
  const eventId = req.params.id;

  try {
    await EventModel.findByIdAndDelete(eventId, req.body, { new: true });
    return res.send({ result: true });
  } catch (error) {
    return next(createError(500, "Error deleting event"));
  }
};

exports.update = async function (req, res, next) {
  if (!req.params.id) {
    return next(createError(400, "ID is required."));
  }

  try {
    const eventId = req.params.id;
    // find the event using the event id, 
    // pass an empty array as res.body is undefined
    const findEvent = await EventModel.findById(eventId, [], {
      new: true,
    });

    // returns our previous data
    console.log("find", findEvent);

    // declare event for new data and update with new data
    const event = await EventModel.findByIdAndUpdate(eventId, req.body, {
      new: true,
    });

    // check to see if there is nothing there by comparing old and new data
    if (!event.name) {
      event.name = findEvent.name;
    }
    if (!event.location) {
      event.location = findEvent.location;
    }
    if (!event.summary) {
      event.summary = findEvent.summary;
    }
    if (!event.date) {
      event.date = findEvent.date;
    }
    if (!event.imgUrl) {
      event.imgUrl = findEvent.imgUrl;
    }

    // save!
    await event.save()

    if (!event) {
      return next(createError(404, "Event not found"));
    }

    // saved data is now returned and sent via updated event
    res.send(event);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
};
