
# NightwatchJS with Cucumber

## Run

```bash
npm run e2e-test

npm run e2e-test -- features/feature1.feature

npm run e2e-test -- features/feature1.feature features/feature2.feature

npm run e2e-test -- features/**/*.feature

npm run e2e-test -- features/

npm run e2e-test -- features/feature2.feature:12

npm run e2e-test -- --name "Searching Google Two Two"

Scenario run through tag
npm run e2e-test -- --tags @scenario2_2

Feature run through tag
npm run e2e-test -- --tags @feature2

npm run e2e-test -- --tags "@feature1 or @feature2"

npm run e2e-test -- --tags "(@feature1 or @feature2) and @scenario2_2"

npm run e2e-test -- --tags "not @feature1"

npm run e2e-test -- --tags "not(@scenario2_2 or @scenario2_1)"
```

## Reference

[Using with Cucumber](https://nightwatch-api.netlify.com/cucumber/)
