import type { Config } from "@jest/types";
import path from "path";

const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: [path.resolve(__dirname, "src/**/*.ts")],
  coverageThreshold: {
    global: {
      lines: 90,
      branches: 90,
      functions: 90,
      statements: 90,
    },
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  coveragePathIgnorePatterns: [path.resolve(__dirname, "node_modules/**/*")],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};

export default config;
