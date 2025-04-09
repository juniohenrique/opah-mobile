exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  specs: ['./test/specs/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 7',
    'appium:platformVersion': '13.0',
    'appium:app': process.env.BS_APP_ANDROID,
    'appium:autoGrantPermissions': true
  }],
  services: ['browserstack'],
  framework: 'mocha',
  reporters: [
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],
  mochaOpts: {
    timeout: 60000
  }
}
