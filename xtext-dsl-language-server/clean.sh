rm -rf */src/main/x*
find . -name Problem* | xargs rm -f
gradle build && gradlew shadowJar
