# A Browser-based One-Click Requirements Engineering Integrated Development Environment

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yijunyu/demo-RE)

This is an [Xtext-based Language Server extension for the Theia IDE](https://github.com/theia-ide/theia-xtext).

It current supports the following Requirements Engineering (RE) languages:

* [Problem Frames](example-workspace/problem)
* [Arguments](example-workspace/argument)

### Build the language server and Theia
```bash
cd xtext-dsl-language-server && gradlew shadowJar && cd .. && yarn
```

### Use Theia
```bash
cd app && yarn start &
open localhost:3000
```

