FROM mrsleeth/v2l:deps
EXPOSE 8080
EXPOSE 3001
WORKDIR /code
RUN apt install -y graphicsmagick
VOLUME /code
CMD ["yarn", "start"]