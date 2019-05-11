# A Browser-based One-Click Requirements Engineering Integrated Development Environment

This is an [Xtext-based Language Server extension for the Theia IDE](https://github.com/theia-ide/theia-xtext).

It current supports the following Requirements Engineering (RE) languages:

* [Problem Frames](example-workspace/problem)
* [Arguments](example-workspace/argument)


## [Use in Gitpod](https://gitpod.io#snapshot/96178943-ced5-4aa9-ad96-dee0131c8772)
* Click at "Open Browser", you will get a working IDE, which has already been started by the following script:
```bash
cd app && yarn start
```

### Development
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yijunyu/demo-RE)
then wait for the following script finishes in the Terminal:
```bash
cd xtext-dsl-language-server && gradlew shadowJar && cd .. && yarn
```

