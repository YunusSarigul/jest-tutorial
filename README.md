
This project follows [Organizing Tests in Jest](https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850) ## Installation and usage (For non windows users)

    npm i
    npm run test:test (for test environment)
    npm run test:stage (for stage environment)
    npm run test:prod (for prod environment)

## Installation and usage (For windows users)

Before starting to test you have to set environment variable like this: $env:NODE_ENV="test"

    npm i
    npm run wtest:test (for test environment)
    npm run wtest:stage (for stage environment)
    npm run wtest:prod (for prod environment)



## Last checks before pushing your code to the git server
    npm run lint
*Ensure that there are no errors or warnings.*

## Important dependencies

* [HTTP calls](https://github.com/vlucas/frisby)
* [String formats](https://github.com/alexei/sprintf.js/)
* [Json filtering](https://lodash.com/docs/4.17.11)
* [Json schema validation](https://github.com/hapijs/joi)

***vscode-jest extension is stongly recommended.***

*todo: [Junit](https://github.com/jest-community/jest-junit) will be used for Jest reporter.*