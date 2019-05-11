rm -rf */src/main/x*
rm -rf io.typefox.xtext.langserver.example/build/classes
rm -rf io.typefox.xtext.langserver.example/model/generated
find . -name *MyDsl* | xargs rm -rf 
gradle build \
	&& gradlew shadowJar \
	&& cp $(find . -name Problem.ecore) ../example-workspace/problem/ \
	&& cp $(find . -name Problem.xtext) ../example-workspace/problem/ \
	&& cd .. && yarn install \
	&& cd app && yarn start
