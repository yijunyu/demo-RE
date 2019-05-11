rm -rf */src/main/x*
gradle build && gradlew shadowJar && cd .. && yarn install && cd app && yarn start
