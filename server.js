const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const app = express();
const {
  items,
  itemCategories,
  itemDetailsAndDescription,
} = require("./api/controllers");

var cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/items", items);
app.get("/api/items/:id", itemDetailsAndDescription);

app.listen(port, () => console.log(`Listening on port ${port}`));
