
const fs = require('fs');
const path = require('path');
const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('cucumber');
const {
    createSession,
    closeSession,
    startWebDriver,
    stopWebDriver,
    getNewScreenshots
} = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

setDefaultTimeout(48000);

BeforeAll(async () => {
    // await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'chromeHeadless' });
    await startWebDriver();
    await createSession();
});

AfterAll(async () => {
    await closeSession();
    await stopWebDriver();
    setTimeout(() => {
        reporter.generate({
            theme: 'bootstrap',
            jsonFile: 'report/cucumber_report.json',
            output: 'report/cucumber_report.html',
            reportSuiteAsScenarios: false,
            launchReport: true,
            metadata: {
                'App Version': '1.0.0',
                'Test Environment': 'POC'
            }
        });
    }, 2000);
});

After(function () {
    getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
});
