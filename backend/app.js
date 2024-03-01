const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");


//using middleawares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// impoting Toutes
const post = require("./routes/post");
const user = require("./routes/user");

// using Routes
app.use("/api/v1",post);
app.use("/api/v1",user);


module.exports = app;