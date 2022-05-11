#
# builder
#

FROM rust:1.60-alpine3.15 as builder

RUN apk add build-base
RUN mkdir -p /usr/src/rust_api
WORKDIR /usr/src/rust_api

COPY ./ /usr/src/rust_api

RUN cargo build --release

#
# deploy
#

FROM alpine:3.15

WORKDIR /usr/src

COPY --from=builder /usr/src/rust_api/target/release/rust-api /usr/src/rust-api

EXPOSE 3000

CMD ./rust-api
