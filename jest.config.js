/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!(@formkit/auto-animate)).+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  roots: ['<rootDir>/jest'],
}

module.exports = config
