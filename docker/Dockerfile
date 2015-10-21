FROM node

ENV APP_PATH=/app

COPY . ${APP_PATH}

WORKDIR ${APP_PATH}
RUN npm install --production

CMD ["npm", "start"]
