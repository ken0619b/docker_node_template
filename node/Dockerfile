FROM node:10.13-alpine

WORKDIR /app

RUN apk update
RUN apk add vim
RUN npm i -g yarn && \ 
    yarn global add create-next-app && \
    yarn global add create-react-app

CMD ["sh"]

EXPOSE 3333