FROM node:8-stretch
EXPOSE 8080
EXPOSE 3001
WORKDIR /code
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update
RUN apt install -y graphicsmagick yarn
COPY package.json .
RUN yarn install
RUN ls -la
CMD ["yarn", "start"]