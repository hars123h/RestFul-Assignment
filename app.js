const express = require("express");
require("./db/conn")
const PersonalInfo = require("./models/info")

const router = require('./routes/info')

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', router);



app.listen(port, (req, res) => {
    console.log(`App is Running on ${port}`);
})