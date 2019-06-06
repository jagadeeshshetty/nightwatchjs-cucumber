
# NightwatchJS with Cucumber

## Run

```bash
npm run e2e-test

npm run e2e-test -- features/google-one.feature

npm run e2e-test -- features/google-one.feature features/google-two.feature

npm run e2e-test -- features/**/*.feature

npm run e2e-test -- features/dir

npm run e2e-test -- features/google-one.feature:4

npm run e2e-test -- --name "One"

Scenario run through tag
npm run e2e-test -- --tags @searchOneTwo

Feature run through tag
npm run e2e-test -- --tags @googleSearchOne
```

## Reference

[Using with Cucumber](https://nightwatch-api.netlify.com/cucumber/)
