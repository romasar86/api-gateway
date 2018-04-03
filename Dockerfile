FROM node:8.9.4

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install

COPY . /code

EXPOSE 3002

CMD ["npm", "start"]