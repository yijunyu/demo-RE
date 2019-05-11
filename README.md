# A Browser-based One-Click Requirements Engineering IDE

This is a Theia Application with an Xtext-based Language Server extension.
It current supports the following Requirements Engineering languages:

* [Problem Frames](example-workspace/problem)
* [Arguments](example-workspace/argument)

## Development

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yijunyu/demo-RE)

... or check it out locally:

### Build the language server and Theia
```bash
  cd xtext-dsl-language-server && gradlew shadowJar && cd .. && yarn
```

### Start Theia
```bash
   cd app && yarn start
```
