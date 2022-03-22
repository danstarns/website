const sheets = require("../../sheets");

async function unsubscribe(req, res) {
  try {
    await sheets.doc.loadInfo();

    await Promise.all(
      await (
        await sheets.doc.sheetsByTitle.subscribers.getRows()
      ).map(async (row) => {
        if (row.email === req.body.email) {
          await row.delete();
        }
      })
    );

    res.status(200).end();
  } catch (error) {
    res.status(400).end(error.message);
  }
}

module.exports = unsubscribe;
