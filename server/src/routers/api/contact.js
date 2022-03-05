const email = require("../../email");
const config = require("../../config");

async function contact(req, res) {
  try {
    await new Promise((resolve, reject) => {
      email.transporter.sendMail(
        {
          to: req.body.email,
          from: config.EMAIL_SENDER_ADDRESS,
          subject: "danielstarns.com",
          text: req.body.message,
          cc: [config.EMAIL_SENDER_ADDRESS, config.EMAIL_CC],
        },
        (err) => {
          if (err) {
            reject(err);
          }

          resolve();
        }
      );
    });

    res.status(200).end();
  } catch (error) {
    res.status(400).end(error.message);
  }
}

module.exports = contact;
