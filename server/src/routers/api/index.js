const express = require("express");
const contact = require("./contact");
const repos = require("./repos");
const tweets = require("./tweets");

const api = express.Router();
api.post("/contact", contact);
api.get("/repos", repos);
api.get("/tweets", tweets);

module.exports = api;
