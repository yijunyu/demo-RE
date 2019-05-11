git ls-files -o | xargs rm -rf
gradle build \
	&& gradlew shadowJar \
	&& cp $(find . -name Problem.ecore) ../example-workspace/problem/ \
	&& cp $(find . -name Problem.xtext) ../example-workspace/problem/ \
	&& cd .. && yarn install \
	&& cd app && yarn start
