const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');

require('dotenv').config()
require("./config/database");


app.use(methodOverride("_method"))
app.use(logger('dev'));


app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))
app.use(require('./config/checkToken'))
app.use('/api/users', require("./routes/api/users"))
app.use("/api/profile",require("./routes/api/profile"))
const ensureLoggedIn = require('./config/ensureLoggedIn');


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Express app is running on port: ${PORT}`)
})