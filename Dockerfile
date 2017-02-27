FROM node:0.12.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g bower
COPY bower.json /usr/src/app/
RUN bower install --allow-root
COPY app.js /usr/src/app/
COPY dist/ /usr/src/app/dist/
EXPOSE 3000
COPY ./docker-entrypoint.sh /usr/src/app
ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]