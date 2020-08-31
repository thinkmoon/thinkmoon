javac -encoding UTF-8  Demo.java
jar -c Demo.class
java -Dfile.encoding=utf-8 -jar Demo.jar
