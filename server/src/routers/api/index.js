const express = require("express");
const contact = require("./contact");
const repos = require("./repos");

const api = express.Router();
api.post("/contact", contact);
api.get("/repos", repos);

module.exports = api;
