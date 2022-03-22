const express = require("express");
const contact = require("./contact");
const repos = require("./repos");
const tweets = require("./tweets");
const subscribe = require("./subscribe");
const unsubscribe = require("./unsubscribe");

const api = express.Router();
api.post("/contact", contact);
api.get("/repos", repos);
api.get("/tweets", tweets);
api.post("/subscribe", subscribe);
api.post("/unsubscribe", unsubscribe);

module.exports = api;
