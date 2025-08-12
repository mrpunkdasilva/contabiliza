const config = {
  testEnvironment: "node",
  moduleFileExtensions: ["js"],
  testMatch: ["**/*.test.js"],
  collectCoverageFrom: ["src/**/*.js", "!src/**/index.js", "!src/**/main.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};

export default config;
