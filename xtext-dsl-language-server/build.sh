git ls-files -o | xargs rm -rf
gradle build && gradlew shadowJar \
&& for t in Problem Argument; do
   tt=$(echo $t | tr '[:upper:]' '[:lower:]')
   cp $(find . -name $t.ecore) ../example-workspace/$tt/
   cp $(find . -name $t.xtext) ../example-workspace/$tt/
done \
&& cd .. && yarn install \
&& cd app && yarn start
