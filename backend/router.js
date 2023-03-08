const express = require('express')
const events = require("./EventsController")
const users = require("./LoginController")
const router = express.Router()


router.get("/users", users.index)

router.post("/users", users.login)

// when this is called we return from the database
// get request
router.get("/events", events.index)
router.get("/events/:id", events.show)

// Post request
router.post("/events/create", events.create)

// delete requests
router.delete("/events/:id", events.delete)

// update requests
router.put("/events/:id", events.update)


module.exports = router