FROM resin/rpi-raspbian:wheezy
MAINTAINER Peter Wijnhorst

RUN apt-get install apt-transport-https

RUN echo 'deb http://deb.nodesource.com/node_0.12 wheezy main' > /etc/apt/sources.list.d/nodesource.list
RUN echo 'deb-src http://deb.nodesource.com/node_0.12 wheezy main' >> /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get nodejs

RUN node helloHttp.js

EXPOSE 8881
