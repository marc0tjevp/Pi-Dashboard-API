FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 80
CMD [ "node", "server.js" ]