FROM node:8.15.0-jessie
EXPOSE 8080
EXPOSE 3001
WORKDIR /code
CMD ["npx", "eleventy", "--serve"]