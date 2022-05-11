#
# builder
#

FROM maven:3.8.5-openjdk-18-slim as builder

RUN mkdir -p /usr/src/java_api
WORKDIR /usr/src/java_api

COPY ./ /usr/src/java_api

RUN mvn package

#
# deploy
#

FROM openjdk:18-alpine3.15

WORKDIR /usr/src

COPY --from=builder /usr/src/java_api/target/java_api-0.0.1-SNAPSHOT.jar /usr/src/java_api-0.0.1-SNAPSHOT.jar

EXPOSE 3000

CMD java -jar ./java_api-0.0.1-SNAPSHOT.jar
