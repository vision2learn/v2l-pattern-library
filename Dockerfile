FROM node:8.15-stretch
EXPOSE 8080
EXPOSE 3001
WORKDIR /code
CMD ["npx", "eleventy", "--serve"]