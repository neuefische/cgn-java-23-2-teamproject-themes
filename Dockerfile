FROM openjdk:20

ENV ENVIRONMENT=prod

LABEL maintainer="Team Theme"

ADD backend/target/themes.jar themes.jar

CMD [ "sh", "-c", "java -jar /themes.jar" ]