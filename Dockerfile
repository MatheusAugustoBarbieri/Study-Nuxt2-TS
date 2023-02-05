FROM node:14.17.0-alpine

ENV APP_DIR /app/

WORKDIR ${APP_DIR}

COPY . ${APP_DIR}

##MAKE .ENV
RUN cp ${APP_DIR}.env.example .env

RUN yarn install

RUN yarn build --modern

ENV HOST 0.0.0.0

EXPOSE 80

CMD ["yarn", "start","--port=80","--modern"]