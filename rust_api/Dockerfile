FROM rust:1.60-slim

RUN mkdir -p /usr/src/rust_api
WORKDIR /usr/src/rust_api

COPY ./ /usr/src/rust_api

RUN cargo build --release

EXPOSE 3000

CMD ./target/release/rust-api
