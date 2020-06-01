module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-extended', './test/jest-start.ts'],
  moduleFileExtensions: ['ts', 'js'],
}
