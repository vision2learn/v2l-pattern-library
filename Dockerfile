FROM node:10-buster
RUN apt update && apt install -y imagemagick
WORKDIR /code
COPY package.json .
RUN yarn
VOLUME [ "/code/node_modules" ]
CMD ["build"]
ENTRYPOINT ["yarn", "run"]
EXPOSE 8080
EXPOSE 3001
