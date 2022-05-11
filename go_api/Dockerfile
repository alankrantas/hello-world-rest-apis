#
# builder
#

FROM golang:1.18.2-alpine3.15 as builder

RUN mkdir -p /usr/src/go_api
WORKDIR /usr/src/go_api

COPY ./ /usr/src/go_api

RUN go build .

#
# deploy
#

FROM alpine:3.15

WORKDIR /usr/src

COPY --from=builder /usr/src/go_api/go_api /usr/src/go_api

EXPOSE 3000

CMD ./go_api
