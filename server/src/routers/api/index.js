const express = require("express");
const contact = require("./contact");

const api = express.Router();
api.post("/contact", contact);

module.exports = api;
