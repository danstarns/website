const nodemailer = require("nodemailer");
const {
  EMAIL_SENDER_ADDRESS,
  EMAIL_SENDER_PASSWORD,
  EMAIL_HOST,
} = require("../config");

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: EMAIL_SENDER_ADDRESS,
    pass: EMAIL_SENDER_PASSWORD,
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
