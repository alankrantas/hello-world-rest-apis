FROM golang:1.18.1-alpine3.15

RUN mkdir -p /usr/src/go_api
WORKDIR /usr/src/go_api

COPY ./ /usr/src/go_api

RUN go build .

EXPOSE 3000

CMD ./go_api
