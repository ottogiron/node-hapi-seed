FROM node

ENV APP_PATH=/app
ENV APP_PORT=3000

COPY package.json ${APP_PATH}/package.json
COPY lib ${APP_PATH}/lib
COPY routes ${APP_PATH}/routes
COPY services ${APP_PATH}/services
COPY config.js ${APP_PATH}/config.js
COPY index.js ${APP_PATH}/index.js
COPY manifest.js ${APP_PATH}/manifest.js
COPY server.js ${APP_PATH}/server.js

WORKDIR ${APP_PATH}
RUN npm install --production

EXPOSE ${APP_PORT}

CMD ["npm", "start"]
