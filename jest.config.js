module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "ts"],
  verbose: true,
  modulePaths: ["<rootDir>/src"],
  testMatch: ["<rootDir>/tests/specs/**/*.(t|j)s"],
  setupFiles: ["<rootDir>/tests/setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(cheerio)/)",
  ],
  testTimeout: 10000,
};
