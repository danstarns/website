const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const {
  HTTP_PORT,
  STATIC_FOLDER,
  CLIENT_URL,
  SERVER_URL,
  EMAIL_CC,
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASSWORD,
  EMAIL_HOST,
  GITHUB_API_TOKEN,
  TWITTER_API_TOKEN,
} = process.env;

module.exports = {
  HTTP_PORT,
  STATIC_FOLDER,
  CLIENT_URL,
  SERVER_URL,
  EMAIL_CC,
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASSWORD,
  EMAIL_HOST,
  GITHUB_API_TOKEN,
  TWITTER_API_TOKEN,
};
