/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ["__tests__"],
  testMatch: ["<rootDir>/**/*.test.ts"]
};
