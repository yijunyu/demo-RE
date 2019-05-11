# An [One-Click IDE](https://gitpod.io#snapshot/96178943-ced5-4aa9-ad96-dee0131c8772) for Requirements Engineering (RE)

* Click at "Open Browser", a Visual Studio Code IDE will start in your browser.

* Click at the folders on the navigator, you will see editable examples of the following RE languages:

1. [Problem Frames](example-workspace/problem)
1. [Satisfaction Arguments](example-workspace/argument)

This is an [Xtext-based Language Server extension for the Theia IDE](https://github.com/theia-ide/theia-xtext).

### Development
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/yijunyu/demo-RE)
then wait for the following script finishes in the Terminal:
```bash
cd xtext-dsl-language-server && gradlew shadowJar && cd .. && yarn
cd app && yarn start
```
