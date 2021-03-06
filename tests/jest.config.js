const path = require("path");
require("dotenv").config();

module.exports = {
  rootDir: __dirname,
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testTimeout: 120000,
  testMatch: [`./**/*.test.ts`],
};
