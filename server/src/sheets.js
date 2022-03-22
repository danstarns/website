const { GoogleSpreadsheet } = require("google-spreadsheet");
const config = require("./config");

const doc = new GoogleSpreadsheet(config.GOOGLE_SHEETS_SUBSCRIBE_SHEET_ID);

async function connect() {
  console.log("sheets connecting");

  await doc.useServiceAccountAuth({
    client_email: config.GOOGLE_SHEETS_EMAIL,
    private_key: config.GOOGLE_SHEETS_PRIVATE_KEY,
  });

  await doc.loadInfo();

  console.log("sheets connected");
}

module.exports = {
  connect,
  doc,
};
