require("dotenv").config();

module.exports = {
  HTTP_PORT: process.env.HTTP_PORT,
  STATIC_FOLDER: process.env.STATIC_FOLDER,
  EMAIL_CC: process.env.EMAIL_CC,
  EMAIL_SENDER_ADDRESS: process.env.EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASSWORD: process.env.EMAIL_SENDER_PASSWORD,
  EMAIL_HOST: process.env.EMAIL_HOST,
  DOMAIN: process.env.DOMAIN,
  GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
  TWITTER_API_TOKEN: process.env.TWITTER_API_TOKEN,
};
