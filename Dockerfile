FROM node:10.24.0
WORKDIR /app
COPY ./index.js ./ RUN npm install COPY . . EXPOSE 8080
CMD ["npm", "run", "start"]
