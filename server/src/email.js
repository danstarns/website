const nodemailer = require("nodemailer");
const config = require("./config");

const transporter = nodemailer.createTransport({
  host: config.EMAIL_HOST,
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: config.EMAIL_SENDER_ADDRESS,
    pass: config.EMAIL_SENDER_PASSWORD,
  },
});

async function connect() {
  console.log("Connecting to email");

  await transporter.verify();

  console.log("Email Connected");
}

module.exports = {
  connect,
  transporter,
};
