FROM node:10
WORKDIR /code
RUN apt update && apt install -y graphicsmagick
COPY package.json .
RUN yarn
VOLUME [ "/code/node_modules" ]
CMD ["build"]
ENTRYPOINT ["yarn", "run"]