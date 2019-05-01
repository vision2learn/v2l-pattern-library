FROM node:8-stretch
EXPOSE 8080
EXPOSE 3001
WORKDIR /code
RUN apt update
RUN apt install -y graphicsmagick
CMD ["npx", "eleventy", "--serve"]