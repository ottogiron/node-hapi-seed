FROM node:4.2

ENV APP_PATH=/app

COPY . ${APP_PATH}

WORKDIR ${APP_PATH}
RUN npm install --production

CMD ["npm", "start"]
