FROM maven:3.8.5-openjdk-17-slim

RUN mkdir -p /usr/src/java_api
WORKDIR /usr/src/java_api

COPY ./ /usr/src/java_api

RUN mvn package

EXPOSE 3000

CMD java -jar ./target/java_api-0.0.1-SNAPSHOT.jar