const path = require("path");
require("dotenv").config();

module.exports = {
  rootDir: __dirname,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testTimeout: 120000,
  testMatch: [`./**/*.test.ts`],
};
