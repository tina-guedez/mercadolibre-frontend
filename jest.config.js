module.exports = {
  testEnvironment: 'jsdom',
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  collectCoverage: true,
  coverageDirectory: 'coverage',

  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',

    '^config$': '<rootDir>jest.setup.js',
  },
};
