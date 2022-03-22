const sheets = require("../../sheets");
const email = require("../../email");
const config = require("../../config");

async function subscribe(req, res) {
  try {
    await sheets.doc.loadInfo();

    await sheets.doc.sheetsByTitle.subscribers.addRow({
      email: req.body.email,
      createdAt: new Date().toISOString(),
    });

    await sheets.doc.updateProperties();

    await new Promise((resolve, reject) => {
      email.transporter.sendMail(
        {
          to: config.EMAIL_CC,
          from: config.EMAIL_SENDER_ADDRESS,
          subject: `New Subscriber`,
          text: `Email: ${req.body.email}`,
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

module.exports = subscribe;
