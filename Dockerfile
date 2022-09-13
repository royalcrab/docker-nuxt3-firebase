FROM node:16-bullseye-slim

ADD files/nuxt-create.sh /opt/
ADD files/firebase.json /opt/
ADD files/nuxt.config.ts /opt/

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install git -y && \
    apt-get install openjdk-17-jre -y && \
    npm install -g npm@latest nuxi nuxt3 firebase-tools


