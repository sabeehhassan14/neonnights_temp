const path = require("path");
const cors = require("cors");
const express = require("express");
const compression = require("compression");
const frameguard = require("frameguard");
let app = express();
let port = process.env.PORT || 3000;

app.use(frameguard({ action: "SAMEORIGIN" }));
app.use(cors());
app.use(compression());
app.use(express.static(__dirname + "/build"));
// eslint-disable-next-line no-unused-vars
app.get("*", (req, res) =>
  res.sendFile(path.normalize(__dirname + "/build/index.html"))
);

app.listen(port, () => console.log(`listening to ${port}`));
