module.exports = function () {
  return {
    files: ['src/**/*.ts', { pattern: 'src/**/*.test.ts', ignore: true }],
    tests: [
      'test/**/*.test.ts',
      { pattern: 'test/**/OtherApi.test.ts', ignore: true },
    ],
    autoDetect: true,
    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules',
      },
    },
    testFramework: 'jest',
    workers: {
      initial: 1,
      regular: 2,
    },
  }
}
