FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

ENV NODE_ENV production

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
