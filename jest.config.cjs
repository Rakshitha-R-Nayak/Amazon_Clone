module.exports = {
  testEnvironment: "jsdom",   // works after install
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^bootstrap/(.*)$': '<rootDir>/src/__mocks__/bootstrap.js'
  }
};
