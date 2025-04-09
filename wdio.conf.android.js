exports.config = {
  specs: ['./test/specs/*.spec.js'],
  maxInstances: 1,
  runner: 'local',
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:autoGrantPermissions': true
  }],
  logLevel: 'info',
  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  mochaOpts: {
    timeout: 60000
  },
  port: 4723,
  services: ['appium']

}
