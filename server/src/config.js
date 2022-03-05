const {
  HTTP_PORT = 5000,
  STATIC_FOLDER = "../client/build",
  EMAIL_CC = "danielstarns@hotmail.com",
  EMAIL_SENDER_ADDRESS = "me@danielstarns.com",
  EMAIL_SENDER_PASSWORD = "Mnbvcxz123!",
  EMAIL_HOST = "smtp.gmail.com",
  CLIENTS_PATH = "../clients/",
  DOMAIN = "localhost",
} = process.env;

module.exports = {
  HTTP_PORT,
  STATIC_FOLDER,
  EMAIL_CC,
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASSWORD,
  EMAIL_HOST,
  CLIENTS_PATH,
  DOMAIN,
};
