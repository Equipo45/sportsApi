const express = require('express')

const bodyParser = require("body-parser")
const workoutsRoutes = require("./v1/routes/workoutRoutes")

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use("/api/v1/workoutsRoutes",workoutsRoutes)

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`)
})