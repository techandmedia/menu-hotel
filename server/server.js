const compression = require("compression");
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Route
const routePertanyaan = require("./routes/route-pertanyaan");
const routeKuesioner = require("./routes/route-kuesioner");
const routePropspace = require("./routes/route-prospace");
const routeLogin = require('./routes/kuesioner/route-login')

server.use(cors());
server.use(compression());
server.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`Listening on port ${port}`));

// New Route
server.use(routePertanyaan);
server.use(routeKuesioner);
server.use(routePropspace);

server.use(routeLogin);
