from theiaide/theia-full
user root
run apt-get install -y openjdk-8-jdk
run echo 2 | update-alternatives --config java
run git clone https://github.com/yijunyu/demo-RE /root/demo-RE
run cd /root/demo-RE \
 && cd xtext-dsl-language-server \
 && ./gradlew shadowJar \
 && cd .. \
 && yarn
run cp -r /root/demo-RE/example-workspace/* /home/theia
run chown -R theia:theia /root
ENTRYPOINT [ "node", "/root/demo-RE/app/src-gen/backend/main.js", "/home/theia", "--hostname=0.0.0.0" ]
user theia
workdir /root/demo-RE/app
