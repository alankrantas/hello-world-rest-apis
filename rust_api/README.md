A "Hello World!" REST API demo using [Rust](https://www.rust-lang.org/) 1.60 and [Axum](https://github.com/tokio-rs/axum) 0.5.4.

## Install Rust

See https://www.rust-lang.org/tools/install.

### Run Project

```bash
cargo run --release
```

or

```bash
cargo build --release
./target/release/rust-api
```

Axum is defined in ```Cargo.toml``` and it will be downloaded automatically.

### Clean Project Build

```bash
cargo clean
```

### Run in Docker

```bash
docker build . -t rust-api-docker -f Dockerfile
docker run -p 3005:3000 --rm rust-api-docker
```

The API would be at ```localhost:3005```.